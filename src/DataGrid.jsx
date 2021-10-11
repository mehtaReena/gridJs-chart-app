import "gridjs/dist/theme/mermaid.min.css";
import "./styles.css";
import { Grid } from "gridjs-react";
import { h } from "gridjs";

export default function DataGrid(props) {

  console.log(props.data)

  const update = () => {

  }

  const edit = (cell, row) => {
    // alert(`Editing "${row.cells[0].data}" "${row.cells[3].data}"`)

    props.method(row.cells[0].data, row.cells[3].data)

  }


  return (
    <div className="grid">
      <h3>Score-Board</h3>
      <button onClick={update} className={"btn"}>
        Add record
      </button>

      <Grid
        data={props.data}
        search={true}
        columns={[{
          id: 'name',
          name: 'Name'
        },
        {
          id: "firstTerm",
          name: "FirstTerm"

        },
        {
          id: "secTerm",
          name: "SecTerm"

        },
        {
          name: 'Actions',
          id: "id",
          formatter: (cell, row) => {
            return h('button', {
              className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
              onClick: () => edit(cell, row)
            }, 'Edit');
          }
        },
        ]}
        pagination={{
          limit: 5,
        }}
        sort={true}








      />
    </div>
  );
}
