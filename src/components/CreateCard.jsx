import React, { useEffect, useState } from 'react';
import newCard from './Cards';

//custom hook for handling input boxes
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  //return the value with the onChange funciton instead of setValue;
  return [value, onChange];
};

const CreateCard = ({ setData }) => {
  const [name, nameOnChange] = useInput('');
  const [room, roomOnChange] = useInput('');
  const [watered, wateredOnChange] = useInput('');
  const [nameError, setNameError] = useState(null);
  const [roomError, setRoomError] = useState(null);
  const [wateredError, setWateredError] = useState(null);
  // const [data, setData] = useState([]);

  // const [isLoaded, setIsLoaded] = useState(false);

  const savePlant = () => {
    if (name === '') setNameError('required');
    if (room === '') setRoomError('required');
    if (isNaN(watered)) setWateredError('must be a number');

    const body = { name, room, watered: parseInt(watered) };

    fetch(`http://localhost:3000/api/newplant`, {
      method: 'POST',
      // mode: 'cors',
      headers: { 'Content-type': 'Application/JSON' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(window.location.reload(false))

      .then((data) => {
        // const {name, room, daysSinceWater} = data
        setData(data);
        // setIsLoaded(true);
      });
  };

  return (
    <div id="cardMaker">
      <h1>Hydration Station</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={nameOnChange}
      />
      {nameError ? <span className="errorMsg">{nameError}</span> : null}
      <input
        type="text"
        placeholder="room"
        value={room}
        onChange={roomOnChange}
      />
      {roomError ? <span className="errorMsg">{roomError}</span> : null}
      <input
        type="text"
        placeholder="days since watered"
        value={watered}
        onChange={wateredOnChange}
      />
      {wateredError ? <span className="errorMsg">{wateredError}</span> : null}
      <button id="addplant" onClick={savePlant}>
        Add Plant{' '}
      </button>
      {(document.getElementsByTagName('input').value = '')}
    </div>
  );
};

export default CreateCard;
