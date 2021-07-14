/**
 *
 * ClientsPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';
interface Props {}

export function ClientsPage(props: Props) {
  return (
    <Table
      form={forms.Clients}
      title={'List Of Clients'}
      data={tables.clients.data}
      columns={tables.clients.columns}
      actions={{ create: true, edit: true, delete: true }}
    />
  );
}
