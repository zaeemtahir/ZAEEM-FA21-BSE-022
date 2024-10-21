import { useState, useEffect } from 'react';
import apiURL from '../apiUrl';
import useAPIGetURL from './useAPIGetURL';

function useProducts() {
  const url = apiURL.baseURL + apiURL.productslist;
  const data = useAPIGetURL(url);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setProducts(data);
      setIsLoading(false);
    }
  }, [data]);

  return { products, isLoading };
}

export default useProducts;