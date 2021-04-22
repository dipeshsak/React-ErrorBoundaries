import React from 'react';


function ErrorDemo(props) {

    if(props.name != "Dipesh"){
        throw new Error("There was an error")
    }
  return (
    <div >
      <h4>{props.name}</h4>
    </div>
  );
}

export default ErrorDemo;
