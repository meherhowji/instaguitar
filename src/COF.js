import React from "react";
import { VictoryPie, VictoryLabel } from "victory";

const RootNotes = () => (
  <VictoryPie
    startAngle={-15}
    innerRadius={85}
    labelRadius={115}
    standalone={false}
    labelPosition={"centroid"}
    labelComponent={
      <VictoryLabel verticalAnchor="middle" textAnchor="middle" />
    }
    labels={(datum) => "$" + datum.value}
    style={{
      labels: {
        fill: "white",
        fontSize: 20,
        fontWeight: "bold",
        verticalAnchor: "middle",
        textAnchor: "middle",
        fontFamily: "Helvetica Neue, sans-serif"
      },
      data: {
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 1,
        strokeOpacity: 0.04,
        fill: (d) => (d.datum.x === 1 ? "#1abc9c" : "#17a98c")
      }
    }}
    data={[
      { x: 1, y: 1, label: "C" },
      { x: 2, y: 1, label: "G" },
      { x: 1, y: 1, label: "D" },
      { x: 2, y: 1, label: "A" },
      { x: 1, y: 1, label: "E" },
      { x: 2, y: 1, label: "B" },
      { x: 1, y: 1, label: "F♯" },
      { x: 2, y: 1, label: "D♭" },
      { x: 1, y: 1, label: "A♭" },
      { x: 2, y: 1, label: "E♭" },
      { x: 1, y: 1, label: "B♭" },
      { x: 2, y: 1, label: "F" }
    ]}
  />
);

const RelativeMinors = () => (
  <VictoryPie
    startAngle={-15}
    standalone={false}
    origin={{ y: 200, x: 200 }}
    colorScale={["#227093"]}
    innerRadius={50}
    labelRadius={67}
    labelPosition={"centroid"}
    labelComponent={
      <VictoryLabel verticalAnchor="middle" textAnchor="middle" />
    }
    style={{
      labels: {
        fill: "white",
        fontSize: 9,
        fontWeight: "bold",
        verticalAnchor: "middle",
        textAnchor: "middle",
        fontFamily: "Helvetica Neue, sans-serif"
      },
      data: {
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 1,
        strokeOpacity: 0.04,
        fill: (d) => (d.datum.x === 1 ? "#227093" : "#1e6484")
      }
    }}
    data={[
      { x: 1, y: 1, label: "Am" },
      { x: 2, y: 1, label: "Em" },
      { x: 1, y: 1, label: "Bm" },
      { x: 2, y: 1, label: "F♯m" },
      { x: 1, y: 1, label: "C♯m" },
      { x: 2, y: 1, label: "G♯m" },
      { x: 1, y: 1, label: "D♯m" },
      { x: 2, y: 1, label: "B♭m" },
      { x: 1, y: 1, label: "Fm" },
      { x: 2, y: 1, label: "Cm" },
      { x: 1, y: 1, label: "Gm" },
      { x: 2, y: 1, label: "Dm" }
    ]}
  />
);

const COF = () => (
  <svg viewBox="0 0 600 600" width={600} height={600} id="cof">
    <RelativeMinors />
    <RootNotes />
  </svg>
);

export { COF };
