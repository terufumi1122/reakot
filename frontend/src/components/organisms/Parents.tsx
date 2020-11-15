import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../molecules/Table';
import PostForm from '../molecules/PostForm';

const ENDPOINT = 'http://localhost:8080/api/parents';

const columns = [
  {title: 'id', field: 'id'},
  {title: 'メールアドレス', field: 'email'},
  {title: '親の名前', field: 'name'},
  {title: 'パスワード', field: 'password'},
  {title: '性別', field: 'gender'},
  {title: '誕生日', field: 'birthday'},
]

export default function Parents() {
  const [parents, setParents] = useState([{
    id: "",
    email: "",
    name: "",
    password: "",
    gender: "",
    birthday: "",
    // insertDatetime: "",
    // updateDatetime: "",
    // updateCount: "",
    // deleteFlg: "",
  }]);

  // ページ読み込み時に親一覧を取得する
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(ENDPOINT);
      setParents(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <PostForm></PostForm>
      <Table columns={columns} data={parents} />
    </>
  );
}