/**
 *
 * SalesPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';

interface Props {}

export function SalesPage(props: Props) {
  return (
    <Table
      form={null}
      title={'List Of Sales'}
      data={tables.sales.data}
      columns={tables.sales.columns}
      actions={{ create: true, edit: true, delete: true }}
    />
  );
}
