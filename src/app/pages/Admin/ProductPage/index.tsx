/**
 *
 * ProductPage
 *
 */
import * as React from 'react';
import tables from 'utils/tables';
import Table from 'app/components/table/Table';
import forms from 'utils/forms';

interface Props {}

export function ProductPage(props: Props) {
  return (
    <Table
      form={forms.Products}
      actions={{ create: true, edit: true, delete: true }}
      title={'List Of Products'}
      data={tables.products.data}
      columns={tables.products.columns}
    />
  );
}
