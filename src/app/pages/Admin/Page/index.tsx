import React from 'react';
import { useLocation } from 'react-router-dom';
import tables from 'utils/tables';
import Table from 'app/components/table/Table';
import Form from 'app/components/Form';
import forms from 'utils/forms';
import AddProduct from 'app/components/sales/left/AddProduct';
import Sales from 'app/components/sales';
const Page = () => {
  const location = useLocation();
  const getPage = () => {
    const t = location.pathname.split('/');
    if (t[t.length - 1] == 'pets') {
      <Table
        title={'List Of Clients'}
        data={tables.pets.data}
        columns={tables.pets.columns}
      />;
    }
    return <div>{t[t.length - 1]}</div>;
  };

  // return <Form title="Pet Registration" elements={forms.Pets} />;
  return getPage();
  // return <Sales />
  //return <TeacherSchedules />
};

export default Page;
