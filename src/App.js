import axios from "axios";
// import { useEffect, useState } from "react";

const App = () => {
  // const [fetched, setFetched] = useState("");

  const getData = async (e) => {
    try {
      const data = await axios.get("/cryptography/ciphers");
      // setFetched(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={getData}>load data</button>
    </>
  );
};

export default App;
