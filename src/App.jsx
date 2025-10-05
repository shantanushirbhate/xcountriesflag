import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countriesflag, setCountriesflag] = useState([]);

  useEffect(() => { 
    const fetchCountriesFlag = async () => {
      try {
        const { data } = await axios.get("https://xcountries-backend.labs.crio.do/all");
        setCountriesflag(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
   
    fetchCountriesFlag(); 
  }, []);



  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {countriesflag.map((country) => (
        <div
          key={country.name} 
          style={{
            border: "1px solid black",
            height: "200px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign:"center"
          }}
        >
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            style={{ height: "100px", width: "100px" }}
          />
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
