import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ENDPOINT = 'http://localhost:8080/api/parents';

export default function Parents() {
  const [parents, setParents] = useState([{
    id: "",
    email: "",
    name: "",
    // password: "",
    // gender: "",
    // birthday: "",
    // insertDatetime: "",
    // updateDatetime: "",
    // updateCount: "",
    // deleteFlg: "",
  }]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(ENDPOINT);
      setParents(result.data);
      console.log(result)
      console.log(result.data)
      console.log(result.data[0])
      console.log(result.data[1])
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {parents && parents.map((p) => (
          <li key={p.id}>
            {p.id}: {p.name}: {p.email}
          </li>
        ))}
      </ul>
    </>
  );
}