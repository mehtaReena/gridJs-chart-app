import React, { useState } from "react";
import "./styles.css";

import LineChart from './LineChart';
import DataGrid from "./DataGrid";


let list = [{
  id: "101",
  name: "David",
  firstTerm: '60',
  secTerm: '50'

},
{
  id: "102",
  name: "Kim",
  firstTerm: '90',
  secTerm: '45'

},

{
  id: "103",
  name: "Jenny",
  firstTerm: '60',
  secTerm: '55'

},

{
  id: "104",
  name: "Sam",
  firstTerm: '20',
  secTerm: '75'

},

{
  id: "105",
  name: "Joe",
  firstTerm: '50',
  secTerm: '82'

},
{
  id: "106",
  name: "jessica",
  firstTerm: '20',
  secTerm: '50'

},
];




export default function App() {

  let [data, setData] = useState(list)

  let labels = data.map(function (e) {
    return e.name;
  });
  let secTermScore = data.map(function (e) {
    return e.secTerm;
  });;

  let firstTerm = data.map(function (e) {
    return e.firstTerm;
  });;







  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "First Term",
        data: firstTerm,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second Term",
        data: secTermScore,
        fill: false,
        borderColor: "#742774"
      }
    ]
  };



  let edit = (name, id) => {
    let newScore = window.prompt("enter new Sec term score please for " + name);
    const newData = data.map(obj =>
      obj.id === id ? { ...obj, secTerm: newScore } : obj
    );
    setData(newData)
    console.log(id, newScore, newData)

  }


  return (
    <div className="App">
      <LineChart
        data={chartData} />
      <DataGrid
        data={data}
        method={edit}
      />

    </div>
  );
}
