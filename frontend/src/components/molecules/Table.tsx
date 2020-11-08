import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';

interface Prop {
  columns: any[],
  data: any[],
}

function Table({
  columns,
  data,
}: Prop) {
  return (
    <MaterialTable
      columns={columns}
      data={data}
      options={{
        showTitle: false,
      }}
    />
  )
}

export default Table