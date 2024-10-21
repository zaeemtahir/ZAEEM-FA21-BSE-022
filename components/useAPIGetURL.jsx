import { useState,useEffect } from "react";

const useAPIGetURL = (url) =>{

    const [data, setData] = useState();

    useEffect(()=>{
        getProducts();
    },[])

const getProducts = async () => {
    try {

      const response = await fetch(url);
      const json = await response.json();

      console.log("this is the response from the api");
      console.log(json);

      setData(json);

    } catch (error) {
      console.error(error);
    } 
    // finally {
    //   // setLoading(false);
    // }
  };

  return data

}

export default useAPIGetURL