/**
 *
 * ClientsPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
interface Props {}

export function ClientsPage(props: Props) {
  return (
    <Table
      title={'List Of Clients'}
      data={tables.clients.data}
      columns={tables.clients.columns}
    />
  );
}
