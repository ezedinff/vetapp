/**
 *
 * BranchesPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';
interface Props {}

export function BranchesPage(props: Props) {
  return (
    <Table
      title={'List Of Branches'}
      data={tables.branches.data}
      columns={tables.branches.columns}
    />
  );
}
