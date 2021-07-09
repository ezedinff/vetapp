/**
 *
 * SuppliersPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';

interface Props {}

export function SuppliersPage(props: Props) {
  return (
    <Table
      title={'List Of Suppliers'}
      data={tables.suppliers.data}
      columns={tables.suppliers.columns}
    />
  );
}
