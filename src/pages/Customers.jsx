import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";
import {customersData, contextMenuItems,  customersGrid} from  '../data/dummy'

const Customers = () => {
  return ( <div className="m-2 p-2 md:p-10 md:m-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent 
      allowPaging
      allowSorting
      dataSource={customersData}
      toolbar={['Search']}
      width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => ( 
            <ColumnDirective key={index} {...item}/>
          ))}

        </ColumnsDirective>
        <Inject services={[Page, Toolbar]}/>
      </GridComponent>
    </div>
  );
};

export default Customers;
