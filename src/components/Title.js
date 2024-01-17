import React, { useEffect } from 'react';

const Title = () => {
  useEffect(() => {
    document.title = 'Expense Tracker';
  }, []);

  return (
    <></>
  )
};

export default Title;
