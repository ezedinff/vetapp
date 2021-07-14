/**
 *
 * BranchesPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
import forms from 'utils/forms';
interface Props {}

export function BranchesPage(props: Props) {
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
