import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker =({ selected, onChange, className })=> {

  //const [selectedDate, setSelectedDate] = useState(null);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };


    return (
        <div>
           <DatePicker
             selected={selected}
             onChange={onChange}
             dateFormat="dd/MM/yyyy"
             className={className} 
           />  
        </div>
    );
}

export default MyDatePicker;