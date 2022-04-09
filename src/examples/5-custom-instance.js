import { useEffect } from 'react';
import autoFetch from '../axios/custom';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    console.log('custom axios instance');
    try {
      const resp1 = await autoFetch('/react-store-products');
      const resp2 = await axios(randomUserUrl);

      console.log(resp1.data);
      console.log(resp2.data);
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
