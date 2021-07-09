/**
 *
 * UsersPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';

interface Props {}

export function UsersPage(props: Props) {
  return (
    <Table
      title={'List Of Employees'}
      data={tables.users.data}
      columns={tables.users.columns}
    />
  );
}
