import "../styles/index.css";
import React, { useState, useEffect } from "react";
import BusRoute from "./BusRoute";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

const RouteSearch = () => {
  const [BusInput, setBusInput] = useState("");
  const [data, setData] = useState([]);
  const [curStopName, setCurStopName] = useState([]);
  let [showRoute, setShowRoute] = useState(false);

  const handleChange = () => {
    showRoute === false ? setShowRoute(true) : setShowRoute(false);
  };
  /*  By oscar: I want to write this function for fetching json data */

  const getData = async () => {
    const response = await fetch(
      "https://data.etabus.gov.hk/v1/transport/kmb/route-stop"
    );
    let { data } = await response.json();
    return data;
  };

  const getBusStation = async (stationID) => {
    const response = await fetch(
      "https://data.etabus.gov.hk/v1/transport/kmb/stop/" + stationID
    );
    let result = await response.json();
    //console.log(result);
    return result;
  };

  useEffect(() => {
    getData().then((data) => {
      setData(data);
      console.log(data);
    });
    //getBusStation("25BD7B50919AA221");
  }, []);

  const searchBusStation = (BusInput) => {
    let resultFound = false;
    if (BusInput) {
      {
        console.log("Hello world");
        console.log(BusInput);
        data &&
          data.map((d) => {
            //for checking
            if (d.route === BusInput) {
              console.log("Result is found!");
              console.log(d.stop);
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
                {/* need a datalist to select 巴士號碼 */}
              </div>
              <div>輸入路線：{BusInput && BusInput.toUpperCase()}</div>
              <div className="searchbtn"></div>
              <div>目的地 </div>
              <div>
                <b> 竹園邨 </b>
                <span>⇋</span>
                <b> 尖沙咀碼頭 </b>
              </div>
            </div>
            <div className="searchbtn">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  searchBusStation(BusInput);
                }}
              >
                查看路線
              </button>
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