/**
 *
 * UsersPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';

interface Props {}

export function UsersPage(props: Props) {
  return (
    <Table
      form={forms.Employees}
      title={'List Of Employees'}
      data={tables.users.data}
      columns={tables.users.columns}
      actions={{ create: true, edit: true, delete: true }}
    />
  );
}
