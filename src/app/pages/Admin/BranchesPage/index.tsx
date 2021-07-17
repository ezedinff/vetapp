/**
 *
 * BranchesPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';
import { Api } from 'api/api';
interface Props {}

export function BranchesPage(props: Props) {
  const api = new Api({
    baseUrl: 'https://localhost:44382',
  });
  React.useEffect(() => {
    api.branchs.branchsList().then(branches => {
      console.log(branches);
    });
  }, []);
  return (
    <Table
      form={forms.Branches}
      title={'List Of Branches'}
      data={tables.branches.data}
      columns={tables.branches.columns}
      actions={{ create: true, edit: true, delete: true }}
    />
  );
}
