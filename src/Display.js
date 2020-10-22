import React from "react";

const Display = (props) => {
  const {dogs} = props
  const loaded = () => (
  <div style={{textAlign:"center"}}>
    {dogs.map((dog)=> (
      <article>
        <img src="{dog.img}" alt=""/>
        <h1>{dog.name}</h1>
        <h3>{dog.age}</h3>
      </article>
    ))}
  </div>
  )
  const loading = <h1>Loading...</h1>
  //display loaded if there are dogs, show loading if there isn't
  
  return <h1>Display</h1>;
};

export default Display;
