import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAPIGetURL = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    try {
      // Try to get data from AsyncStorage first
      const storedData = await AsyncStorage.getItem(url);
      if (storedData !== null) {
        console.log("Data is fetched from AsyncStorage")
        setData(JSON.parse(storedData));
      }

      // Fetch new data from the API
      const response = await fetch(url);
      const json = await response.json();

      console.log("This is the response from the API");
      console.log(json);

      // Update state and store in AsyncStorage
      setData(json);
      await AsyncStorage.setItem(url, JSON.stringify(json));

    } catch (error) {
      console.error(error);
    }
  };

  return data;
}

export default useAPIGetURL;