import React from 'react';

const Age = (props) => {
  return (
    <p>
      {props.age > 18 ? `Your age is ${props.age}.` : 'You are very young!'}
    </p>
  );
};

export default Age;
