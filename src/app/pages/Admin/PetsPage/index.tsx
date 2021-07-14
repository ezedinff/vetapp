/**
 *
 * PetsPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';

interface Props {}

export function PetsPage(props: Props) {
  return (
    <Table
      form={forms.Pets}
      title={'List Of Pets'}
      data={tables.pets.data}
      columns={tables.pets.columns}
      actions={{ create: true, edit: true, delete: true }}
    />
  );
}
