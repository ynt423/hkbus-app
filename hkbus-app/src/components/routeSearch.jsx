import "../styles/index.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const RouteSearch = () => {
  const [BusInput, setBusInput] = useState("");
  const [data, setData] = useState([]);
  /*  By oscar: I want to write this function for fetching json data */

  const getData = async () => {
    const response = await fetch(
      "https://data.etabus.gov.hk/v1/transport/kmb/route-stop"
    );
    let { data } = await response.json();
    return data;
  };
  useEffect(() => {
    getData().then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

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
            {data
              .filter((target) => target.route == 1)
              .map((filteredTarget) => (
                <li key={filteredTarget.seq + filteredTarget.bound}>
                  {filteredTarget.stop}
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteSearch;
