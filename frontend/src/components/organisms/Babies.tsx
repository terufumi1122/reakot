import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import Table from '../molecules/Table';

const ENDPOINT = 'http://localhost:8080/api/babies';

const columns = [
  {title: '赤ちゃんの名前', field: 'name'},
  {title: '性別', field: 'gender'},
  {title: '誕生日', field: 'birthday', type: 'date'},
]

interface Baby {
  id: number
  name: string
  gender: number
  birthday: Date
}

const Babies: FC = () => {
  const [babies, setBabies] = useState([{
    id: 0,
    name: "",
    gender: 0,
    birthday: Date,
  }]);

  const createBaby = async (newData: any) => {
    await axios.post(ENDPOINT, newData as Baby);
    await fetchData();
  }
  const updateBaby = async (newData: any, oldData: any) => {
    const id: number = (oldData as Baby).id;
    await axios.put(`${ENDPOINT}/${id}`, newData as Baby);
    await fetchData();
  }
  const deleteBaby = async (oldData: any) => {
    const id: number = (oldData as Baby).id;
    await axios.delete(`${ENDPOINT}/${id}`);
    await fetchData();
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

export default Babies;