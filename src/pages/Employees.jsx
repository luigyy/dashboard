import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit, 
  Sort, 
  Filter,
  Page,
  Inject,
  Toolbar,
  Selection
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 p-2 md:p-10 md:m-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent 
      allowPaging
      dataSource={employeesData}
      allowSorting
      toolbar={['Delete']}
      width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => ( 
            <ColumnDirective key={index} {...item}/>
          ))}

        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  );
};

export default Employees;
