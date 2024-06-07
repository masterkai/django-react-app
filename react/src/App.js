import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/mymodel/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>name: {item.name}</div>
      ))}
    </div>
  );
}

export default App;
