/**
 *
 * SuppliersPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';

interface Props {}

export function SuppliersPage(props: Props) {
  return (
    <Table
      form={forms.Clients}
      title={'List Of Suppliers'}
      data={tables.suppliers.data}
      columns={tables.suppliers.columns}
      actions={{ create: true, edit: true, delete: true }}
    />
  );
}
