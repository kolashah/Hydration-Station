import React, { useState } from 'react';

function CreateCard(singlePlant) {
  function deleteCard(cardId) {
    fetch(`http://localhost:3000/api/${cardId}`, {
      method: 'DELETE',
    })
      .then((data) => data.json())
      .then(window.location.reload(false))
      .catch((err) => console.log(err));
  }

  function Cards(props) {
    return (
      <div className="card">
        <button className="updateWater" onClick={() => (props.water = '')}>
          Watered !
        </button>
        <h2 className="name">{props.name}</h2>
        <h3 className="room">{props.room}</h3>
        <h2 className="daysSince">{props.water} days </h2>
        <button
          className="delete"
          id={props.key}
          onClick={() => deleteCard(props.cardId)}
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <Cards
      key={singlePlant._id}
      cardId={singlePlant._id}
      name={singlePlant.name}
      room={singlePlant.room}
      water={singlePlant.daysSinceWater}
    />
  );
}

//function takes id
//makes request to backend

export default CreateCard;
