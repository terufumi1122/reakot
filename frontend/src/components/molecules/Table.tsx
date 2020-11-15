import React, { FC } from 'react';
import MaterialTable from 'material-table';

interface Prop {
  columns: any[],
  data: any[],
  rowAddHandler: (newData: any) => void,
  rowUpdateHandler: (newData: any, oldData: any) => void,
  rowDeleteHandler: (oldData: any) => void,
} 

const Table: FC<Prop> = ({ 
  columns,
  data,
  rowAddHandler,
  rowUpdateHandler,
  rowDeleteHandler,
}: Prop) => {

  return (
    <MaterialTable
      columns={columns}
      data={data}
      options={{
        showTitle: false,
      }}
      editable={{
        onRowAdd: async (newData) => rowAddHandler(newData),
        onRowUpdate: async (newData, oldData) => rowUpdateHandler(newData, oldData),
        onRowDelete: async (oldData) => rowDeleteHandler(oldData),
      }}
    />
  )
}

export default Table;