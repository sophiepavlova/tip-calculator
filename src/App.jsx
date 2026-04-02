import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <BillInput />
      <SelectPercentage text='How did you like the service?' />
      <SelectPercentage text='How did your friend like the service?' />
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  const [bill, setBill] = useState(0);
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type='number'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ text }) {
  const [satisfaction, setSatisfaction] = useState('Choose the tip');
  return (
    <div>
      <p>{text}</p>
      <select
        value={satisfaction}
        onChange={(e) => setSatisfaction(e.target.value)}
      >
        <option value='Dissatisfied (0%)'>Dissatisfied (0%)</option>
        <option value='It was ok (5%)'>It was ok (5%)</option>
        <option value='It was good (10%)'>It was good (10%)</option>
        <option value='Absolutely amazing! (20%)'>
          Absolutely amazing! (20%)
        </option>
      </select>
    </div>
  );
}

function Output() {
  return <h1>{`You pay $sum ($bill + $tip)`}</h1>;
  // return <h1>{`You pay $${sum} ($${bill} + $${tip})`}</h1>;
}

function Reset() {
  return <button>Reset</button>;
}
