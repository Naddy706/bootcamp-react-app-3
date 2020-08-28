import React from 'react';


function Dinner(props) {
  return (
    <div>
      <h1>We are serving {props.dinnerItem}.</h1>
      <h1>and sweetdish is {props.sweetdish}.</h1>
    </div>
  );
}

export default Dinner;
