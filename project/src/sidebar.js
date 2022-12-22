import React from "react";
import Map from "./Map";
import "./App.css";
import "./sidebar.css";

function SideBar() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.express));
  // }, []);

  return (
    <div>
      <>
        <nav id="menu"></nav>

        {/* <div class="map-overlay" id="features">
          <h2>Zip-Code:</h2>
          <div id="pd"></div>
        </div> */}
        <div id="legend"></div>

        <div className="side">
          <div className="heading">
            <h1>Vaccine Centers</h1>
          </div>
          <div id="listings" className="listings" />
        </div>
        <div id="map" className="map">
          <Map />
        </div>
      </>
    </div>
  );
}

export default SideBar;