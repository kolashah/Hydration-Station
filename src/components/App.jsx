import React, { useEffect, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import newCard from './Cards';
import CreateCard from './CreateCard';


function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleUpdate = (newData) => {
    setData([newData, ...data]);
  };

  useEffect(() => {
      fetch(`http://localhost:3000/api/`)
        .then((res) => res.json())
        .then((plantData) => {
          setData(plantData);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err))
      }, [])


  return (
    <div className="body">
      <CreateCard setData={handleUpdate} />
      

      <div className="container">
        {!isLoaded && <p>Loading...</p>}
        {isLoaded && data.map(newCard)}
      </div>
    </div>
  );
}

export default App;
