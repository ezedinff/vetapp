/**
 *
 * DiscountPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';

interface Props {}

export function DiscountPage(props: Props) {
  return (
    <Table
      form={forms.Discounts}
      title={'List Of Discounts'}
      data={tables.discounts.data}
      columns={tables.discounts.columns}
      actions={{ create: true, edit: true, delete: true }}
    />
  );
}
