import React, {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/test')
    .then((response) => {
      console.log(response);
      setMessage(response.data);
    })
    .catch((error) => {
      console.log(error);
      setMessage("Error fetching data: " + error);
    });
  }, []);

  return (
    <div>
      <h1>
        Welcome to the react app!
      </h1>
      <p>Backend says:</p>
      <p>{message}</p>
    </div>
  );
};

export default App;