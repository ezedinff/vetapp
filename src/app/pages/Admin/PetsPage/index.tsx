/**
 *
 * PetsPage
 *
 */
import * as React from 'react';
import Table from 'app/components/table/Table';
import tables from 'utils/tables';

interface Props {}

export function PetsPage(props: Props) {
  return (
    <Table
      title={'List Of Pets'}
      data={tables.pets.data}
      columns={tables.pets.columns}
    />
  );
}
