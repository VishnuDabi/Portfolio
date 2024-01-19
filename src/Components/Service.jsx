import React from "react";
import "./Service.css";
import CastOutlinedIcon from "@mui/icons-material/CastOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
const Service = () => {
  return (
    <>
      <section className="service-section">
        <div className="service-container" id="service">
          <div className="service-main-text-container">
            <h1 className="service-title">My Awesome Service</h1>
            <p className="service-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="service-section">
            <div className="service-item">
              <i>
                <CastOutlinedIcon
                  sx={{ fontSize: "40px" }}
                  // className="service-icon-size"
                />
              </i>
              <h1>Business Stratagy</h1>
              <p>
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
            </div>
            <div className="service-item">
              <i>
                <LayersOutlinedIcon sx={{ fontSize: "40px" }} />
              </i>
              <h1>Website Development</h1>
              <p>
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
            </div>
            <div className="service-item">
              <i>
                <PeopleOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
              </i>
              <h1>Marketing & Reporting</h1>
              <p>
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
            </div>
            <div className="service-item">
              <i>
                <DesktopWindowsOutlinedIcon sx={{ fontSize: "40px" }} />
              </i>
              <h1>Mobile App Development</h1>
              <p>
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
            </div>
            <div className="service-item">
              <i>
                <PeopleOutlineOutlinedIcon sx={{ fontSize: "40px" }} />
              </i>
              <h1>Marketing & Reporting</h1>
              <p>
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
            </div>
            <div className="service-item">
              <i>
                <DesktopWindowsOutlinedIcon sx={{ fontSize: "40px" }} />
              </i>
              <h1>Mobile App Development</h1>
              <p>
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
