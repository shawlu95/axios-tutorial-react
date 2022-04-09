import { useEffect } from 'react';
import autoFetch from '../axios/interceptor';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    console.log('axios interceptors');
    try {
      const resp = await autoFetch('/react-store-products');
      console.log(resp.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
