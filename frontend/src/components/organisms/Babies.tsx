import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../molecules/Table';

const ENDPOINT = 'http://localhost:8080/api/babies';

const columns = [
  {title: 'id', field: 'id'},
  {title: '赤ちゃんの名前', field: 'name'},
  {title: '性別', field: 'gender'},
  {title: '誕生日', field: 'birthday'},
]

interface Baby {
  id: number
  name: string
  gender: number
  birthday: Date
}

export default function Babies() {
  const [babies, setBabies] = useState([{
    id: "",
    name: "",
    gender: "",
    birthday: "",
  }]);

  const createBaby = async (newData: any) => {
    axios.post(ENDPOINT, newData as Baby);
  }
  const updateBaby = async (newData: any, oldData: any) => {
    const id: number = (oldData as Baby).id;
    axios.put(`${ENDPOINT}/${id}`, newData as Baby);
  }
  const deleteBaby = async (oldData: any) => {
    const id: number = (oldData as Baby).id;
    axios.delete(`${ENDPOINT}/${id}`);
  }

  const fetchData = async () => {
    const result = await axios(ENDPOINT);
    setBabies(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        data={babies}
        rowAddHandler={createBaby}
        rowUpdateHandler={updateBaby}
        rowDeleteHandler={deleteBaby}
         />
    </>
  );
}