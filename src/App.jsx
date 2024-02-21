import { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import TableRowColumn from "./Component/UI/TableRowColumn";
import ToggleMenu from "./Component/UI/ToggleMenu/ToggleMenu";
import { data } from "./Component/utils/data";

const App = () => {
  const [tableCol, setTableCol] = useState({
    Title: true,
    Categories: false,
    Price: true,
    Date: false,
    Author: false,
    Status: true,
    Action: true,
  });

  return (
    <div className="body">
      <Header />

      {/* Table container below */}
      <div className="container">
        {/*sidebar  tooggle below */}
        <ToggleMenu tableCol={tableCol} setTableCol={setTableCol} />

        {/* Table column component below*/}
        <div className="table-wrapper">
          {/* Title component */}
          {tableCol.Title && (
            <TableRowColumn colHead="Title" data={data} prop="Title" />
          )}
          {/* Categories column component below */}
          {tableCol.Categories && (
            <TableRowColumn
              colHead="Categories"
              data={data}
              prop="Categories"
            />
          )}
          {/* Author column component below*/}
          {tableCol.Author && (
            <TableRowColumn colHead="Author" data={data} prop="Author" />
          )}
          {/* Date column component below*/}
          <div className="date">
            {tableCol.Date && (
              <TableRowColumn colHead="Date" data={data} prop="Date" />
            )}
          </div>

          {/* Price component */}
          {tableCol.Price && (
            <TableRowColumn colHead="Price" data={data} prop="Price" />
          )}
          {/* status component */}
          {tableCol.Status && (
            <TableRowColumn colHead="Status" data={data} prop="Status" />
          )}

          {/* action component */}
          {tableCol.Action && (
            <TableRowColumn colHead="Action" data={data} prop="Action" />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
