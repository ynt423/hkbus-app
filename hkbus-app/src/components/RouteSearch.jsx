import React from "react";

const RouteSearch = () => {
  return (
    <div>
      RouteSearch
      <div className="RouteSection">
        <div className="index-title">路線搜尋</div>
        <div className="index-content">
          <div className="routesearch">
            <div className="routecontent">
              <div>
                <label for="input-search">選擇路線</label>
              </div>
              <div>
                <input
                  class="form-control"
                  type="text"
                  list="search"
                  id="input-search"
                  value="1"
                  onkeyup="this.value = this.value.toUpperCase();"
                  onchange="changeOptions(this.value)"
                ></input>
                {/* need a datalist to select 巴士號碼 */}
              </div>
              <div>目的地 </div>
              <div>
                <b> 竹園邨 </b>
                <span>⇋</span>
                <b> 尖沙咀碼頭 </b>
              </div>
            </div>
            <div className="searchbtn">
              <button type="button" class="btn btn-default" onclick="search()">
                查看路線
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteSearch;
