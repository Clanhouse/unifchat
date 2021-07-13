import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import '../styles/app.scss';
const App: FC = () => {
  const url = 'http://localhost:8080';
  const [data, setData] = useState();

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const { data } = await axios.get(`${url}/api//dummy-message`);
        setData(data);
      } catch (e) {
        throw e;
      }
    };
    checkAPI();
  }, []);
  return <>{JSON.stringify(data)}</>;
};

export default App;
