import React, { Component } from "react";
import Chart from "react-google-charts";
class UserActivityModal extends Component {
  state = {};
  Refs = {
    allowedValueRange: React.createRef(),
  };
  render() {
    if (this.props.userDetails === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <div className="col-lg-12 col-md-12 col-12">
          <h1>User Activity of {this.props.userDetails.userid}</h1>
          <div className="row">
            <div className="col-lg-6  col-12">
              <Chart
                width={"450px"}
                height={"300px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Task", "Disk Usage"],

                  [
                    "Free",
                    this.props.userDetails["Allowed Space"] -
                      this.props.userDetails["Used Space"],
                  ],
                  ["Used", this.props.userDetails["Used Space"]],
                ]}
                options={{
                  title: "Disk Usage",
                }}
              />
            </div>
            <div className="col-lg-6  col-12">
              <div class="form-group m-5">
                <label>Allowed Space for {this.props.userDetails.userid}</label>
                <hr />
                <label style={{ float: "left" }}>10MB</label>
                <label style={{ float: "right" }}>1GB</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  min={10}
                  max={1024}
                  defaultValue={this.props.userDetails["Allowed Space"]}
                  onChange={() =>
                    this.props.updateAllowedSpace(
                      this.Refs.allowedValueRange.current.value,
                      this.props.userDetails.userid
                    )
                  }
                  ref={this.Refs.allowedValueRange}
                />
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={this.props.userDetails["Allowed Space"] + " MB"}
                  />
                  <div class="input-group-append">
                    <label
                      class="input-group-text"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.submitAllowedSpace(
                          this.props.userDetails.userid
                        )
                      }
                    >
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className=" col-lg-6 col-12">
              <Chart
                width={"450px"}
                height={"300px"}
                chartType="Histogram"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Dinosaur", "Length"],
                  ["Acrocanthosaurus (top-spined lizard)", 12.2],
                  ["Albertosaurus (Alberta lizard)", 9.1],
                  ["Allosaurus (other lizard)", 12.2],
                  ["Apatosaurus (deceptive lizard)", 22.9],
                  ["Archaeopteryx (ancient wing)", 0.9],
                  ["Argentinosaurus (Argentina lizard)", 36.6],
                  ["Baryonyx (heavy claws)", 9.1],
                  ["Brachiosaurus (arm lizard)", 30.5],
                  ["Ceratosaurus (horned lizard)", 6.1],
                  ["Coelophysis (hollow form)", 2.7],
                  ["Compsognathus (elegant jaw)", 0.9],
                  ["Deinonychus (terrible claw)", 2.7],
                  ["Diplodocus (double beam)", 27.1],
                  ["Dromicelomimus (emu mimic)", 3.4],
                  ["Gallimimus (fowl mimic)", 5.5],
                  ["Mamenchisaurus (Mamenchi lizard)", 21.0],
                  ["Megalosaurus (big lizard)", 7.9],
                  ["Microvenator (small hunter)", 1.2],
                  ["Ornithomimus (bird mimic)", 4.6],
                  ["Oviraptor (egg robber)", 1.5],
                  ["Plateosaurus (flat lizard)", 7.9],
                  ["Sauronithoides (narrow-clawed lizard)", 2.0],
                  ["Seismosaurus (tremor lizard)", 45.7],
                  ["Spinosaurus (spiny lizard)", 12.2],
                  ["Supersaurus (super lizard)", 30.5],
                  ["Tyrannosaurus (tyrant lizard)", 15.2],
                  ["Ultrasaurus (ultra lizard)", 30.5],
                  ["Velociraptor (swift robber)", 1.8],
                ]}
                options={{
                  title: `Login Rate`,
                  legend: { position: "none" },
                }}
                rootProps={{ "data-testid": "1" }}
              />
            </div>
            <div className=" col-lg-6 col-12">
              <Chart
                width={"450px"}
                height={"300px"}
                chartType="Histogram"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Dinosaur", "Length"],
                  ["Acrocanthosaurus (top-spined lizard)", 12.2],
                  ["Albertosaurus (Alberta lizard)", 9.1],
                  ["Allosaurus (other lizard)", 12.2],
                  ["Apatosaurus (deceptive lizard)", 22.9],
                  ["Archaeopteryx (ancient wing)", 0.9],
                  ["Argentinosaurus (Argentina lizard)", 36.6],
                  ["Baryonyx (heavy claws)", 9.1],
                  ["Brachiosaurus (arm lizard)", 30.5],
                  ["Ceratosaurus (horned lizard)", 6.1],
                  ["Coelophysis (hollow form)", 2.7],
                  ["Compsognathus (elegant jaw)", 0.9],
                  ["Deinonychus (terrible claw)", 2.7],
                  ["Diplodocus (double beam)", 27.1],
                  ["Dromicelomimus (emu mimic)", 3.4],
                  ["Gallimimus (fowl mimic)", 5.5],
                  ["Mamenchisaurus (Mamenchi lizard)", 21.0],
                  ["Megalosaurus (big lizard)", 7.9],
                  ["Microvenator (small hunter)", 1.2],
                  ["Ornithomimus (bird mimic)", 4.6],
                  ["Oviraptor (egg robber)", 1.5],
                  ["Plateosaurus (flat lizard)", 7.9],
                  ["Sauronithoides (narrow-clawed lizard)", 2.0],
                  ["Seismosaurus (tremor lizard)", 45.7],
                  ["Spinosaurus (spiny lizard)", 12.2],
                  ["Supersaurus (super lizard)", 30.5],
                  ["Tyrannosaurus (tyrant lizard)", 15.2],
                  ["Ultrasaurus (ultra lizard)", 30.5],
                  ["Velociraptor (swift robber)", 1.8],
                ]}
                options={{
                  title: `Photo Upload Rate`,
                  legend: { position: "none" },
                }}
                rootProps={{ "data-testid": "1" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserActivityModal;
