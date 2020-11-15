import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import Table from '../molecules/Table';

const ENDPOINT = 'http://localhost:8080/api/parents';

const columns = [
  {title: 'メールアドレス', field: 'email'},
  {title: '親の名前', field: 'name'},
  {title: 'パスワード', field: 'password'},
  {title: '性別', field: 'gender'},
  {title: '誕生日', field: 'birthday'},
]

interface Parent {
  id: number
  email: string
  name: string
  password: string
  gender: number
  birthday: Date
}

const Parents: FC = () => {
  const [parents, setParents] = useState([{
    id: "",
    email: "",
    name: "",
    password: "",
    gender: "",
    birthday: "",
  }]);

  const createParent = async (newData: any) => {
    await axios.post(ENDPOINT, newData as Parent);
    await fetchData();
  }
  const updateParent = async (newData: any, oldData: any) => {
    const id: number = (oldData as Parent).id;
    await axios.put(`${ENDPOINT}/${id}`, newData as Parent);
    await fetchData();
  }
  const deleteParent = async (oldData: any) => {
    const id: number = (oldData as Parent).id;
    await axios.delete(`${ENDPOINT}/${id}`);
    await fetchData();
  }

  const fetchData = async () => {
    const result = await axios(ENDPOINT);
    setParents(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        data={parents}
        rowAddHandler={createParent}
        rowUpdateHandler={updateParent}
        rowDeleteHandler={deleteParent}
         />
    </>
  );
}

export default Parents;