import "../styles/index.css";
import React, { useState, useEffect } from "react";
import BusRoute from "./BusRoute";
import SelectMenu from "./SelectMenu";
import "bootstrap/dist/css/bootstrap.css";

const RouteSearch = () => {
  const [BusInput, setBusInput] = useState("");
  const [data, setData] = useState([]);
  const [busStation, setBusStation] = useState([]);
  const [routeArrI, setRouteArrI] = useState([]);
  const [routeArrO, setRouteArrO] = useState([]);
  let [showRoute, setShowRoute] = useState(false);

  const handleChange = () => {
    showRoute === false ? setShowRoute(true) : setShowRoute(false);
  };

  const getData = async () => {
    const response = await fetch(
      "https://data.etabus.gov.hk/v1/transport/kmb/route-stop"
    );
    let { data } = await response.json();
    return data;
  };

  const getBusStation = async () => {
    const response = await fetch(
      "https://data.etabus.gov.hk/v1/transport/kmb/stop/"
    );
    let { data } = await response.json();
    return data;
  };

  const stationNameConverter = (stationCode) => {
    let stationName = "";
    busStation &&
      busStation.map((d) => {
        if (d.stop === stationCode) {
          stationName = d.name_tc;
        }
      });
    return stationName;
  };

  useEffect(() => {
    getData().then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    getBusStation().then((data) => {
      setBusStation(data);
    });
  }, []);

  const searchBusStation = (BusInput) => {
    let tmp_arr_I = [];
    let tmp_arr_O = [];
    let resultFound = false;
    if (BusInput) {
      {
        console.log("Hello world");
        console.log(BusInput);
        data &&
          data.map((d) => {
            //for checking
            if (d.route === BusInput) {
              console.log(d);
              console.log("Result is found!");
              console.log(d.stop, d.seq, d.bound, d.service_type);
              if (d.bound === "I") {
                tmp_arr_I.push(d.stop);
              } else if (d.bound === "O") {
                tmp_arr_O.push(d.stop);
              }
              resultFound = true;
            }
          });
      }
      if (!resultFound) {
        alert("查無此路線，請重新輸入");
        setBusInput("");
      }
    } else {
      alert("請輸入巴士號碼");
    }
    console.log(tmp_arr_I);
    return tmp_arr_I;
  };
  return (
    <div>
      <div className="RouteSection">
        <div className="index-title">路線搜尋</div>
        <div className="index-content">
          <div className="routesearch">
            <div className="routecontent">
              <div>
                <label htmlFor="input-search">選擇路線</label>
              </div>

              <div className="input-group">
                <input
                  className="inputbox-1"
                  type="text"
                  list="search"
                  id="input-search-busNo"
                  placeholder="請輸入巴士號碼..."
                  value={BusInput}
                  onChange={(event) => {
                    setBusInput(event.target.value);
                  }}
                ></input>
                <SelectMenu data={data} setBusInput={setBusInput}></SelectMenu>
              </div>

              {/* need a datalist to select 巴士號碼 */}

              <div>輸入路線：{BusInput && BusInput.toUpperCase()}</div>
              <div className="searchbtn"></div>
              <br />
            </div>
            <div className="searchbtn">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setRouteArrI(searchBusStation(BusInput.toUpperCase()));
                  console.log(routeArrI);
                }}
              >
                查詢路線
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  console.log(busStation[0].stop);
                  searchBusStation(BusInput.toUpperCase());
                }}
              >
                查看路線
              </button>
            </div>

            <div>目的地 </div>
            <div>
              <b> {stationNameConverter(routeArrI[0])} </b>
              <span>⇋</span>
              <b> {stationNameConverter(routeArrI[routeArrI.length - 1])} </b>
            </div>

            <div className="routedata"></div>
            {/* {return reselt of the route} */}
            {showRoute &&
              data
                .filter((target) => target.route === BusInput)
                .map((filteredTarget) => (
                  <li key={filteredTarget.seq + filteredTarget.bound}>
                    {/*   {useEffect(getBusStation(filteredTarget.stop), [])} */}
                  </li>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteSearch;
