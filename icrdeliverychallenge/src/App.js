import React , { useState, useEffect } from 'react';
import './App.css';
import CardControls from './components/CardControls';
import PaymentDetails from './components/paymentDetails/PaymentDetails';
import {cardData} from './card';

function App() {

  const [values, setValues] = useState([]);
  const [types, setTypes] = useState('Buy');
  const [order, setOrder] = useState({
    miles: '1000',
    tax: '1.00',
    amount:'7.00',
    cost: '8.00'
  });
  const [sort, setSort] = useState();

    useEffect(()=>{
        const data = cardData.filter(data=>data.type === types);
        setValues(data);
    },[types])

  return (
    <div className="container">
      <h2 className="main-heading">Get your rewards faster. Buy, Gift or Transfer Miles today!</h2>
      <CardControls cardData={values} onSet={setTypes} onOrderChange={setOrder} onsort={setSort}/>
      <PaymentDetails cardData = {order}/>
    </div>
  );
}

export default App;
