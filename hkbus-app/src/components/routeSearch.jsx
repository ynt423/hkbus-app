import "../styles/index.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const RouteSearch = () => {
  const [BusInput, setBusInput] = useState("");
  let x = [];
  let [data, setData] = useState([]);
  /*  By oscar: I want to write this function for fetching json data */

  const getData = async () => {
    const response = await fetch(
      "https://data.etabus.gov.hk/v1/transport/kmb/route-stop"
    ).then((response) => response.json());
    console.log(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  /*   const BusSearch = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedata = await dataFetch.json();
    console.log(parsedata.data);
    x.map(x.concat(parsedata.data));
    console.log(x);
  };
  useEffect(() => {
    BusSearch(URL);
  }, []); */
  /*  useEffect(async () => {
    const response = await fetch(
      "https://data.etabus.gov.hk/v1/transport/kmb/route-stop"
    );
    const json = await response.json();
    setData(json);
  }, []); */ //only run once */
  /* setBusInput(response.) */
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
              <div>
                <input
                  className="inputbox-1"
                  type="text"
                  list="search"
                  id="input-search-busNo"
                  placeholder="請輸入巴士號碼"
                  value={BusInput}
                  onChange={(event) => {
                    setBusInput(event.target.value);
                  }}
                ></input>
                {/* need a datalist to select 巴士號碼 */}
              </div>
              <div>輸入路線：{BusInput}</div>
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
                className="btn btn-default"
                //onClick="search()"
              >
                查看路線
              </button>
            </div>
            {/* {return reselt of the route} */}
            {/* {data
              .filter((target) => target.route == 1)
              .map((filteredTarget) => (
                <li>{filteredTarget.stop}</li>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteSearch;
