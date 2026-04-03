import { useState } from 'react';
import './App.css';

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [satisfaction, setSatisfaction] = useState(0);
  const [satisfactionSecond, setSatisfactionSecond] = useState(0);
  const tipsPercetage = (satisfaction + satisfactionSecond) / 2;
  const tipAmount = ((bill || 0) * tipsPercetage) / 100;
  console.log(tipAmount);
  // console.log(Number(satisfaction));
  // console.log(Number(satisfactionSecond));
  // console.log(tipsPercetns);
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        text='How did you like the service?'
        value={Number(satisfaction)}
        onSetValue={setSatisfaction}
      />
      <SelectPercentage
        text='How did your friend like the service?'
        value={satisfactionSecond}
        onSetValue={setSatisfactionSecond}
      />
      <Output bill={bill} tipAmount={tipAmount} />
      <Reset
        setBill={setBill}
        onReset1={setSatisfaction}
        onReset2={setSatisfactionSecond}
      />
    </div>
  );
}

function BillInput({ bill, setBill }) {
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

function SelectPercentage({ text, value, onSetValue }) {
  return (
    <div>
      <p>{text}</p>
      <select
        value={value}
        onChange={(e) => onSetValue(Number(e.target.value))}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was ok (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tipAmount }) {
  const sum = bill + tipAmount;
  return <h1>{`You pay $${sum} ($${bill} + $${tipAmount})`}</h1>;
  // return <h1>{`You pay $${sum} ($${bill} + $${tip})`}</h1>;
}

function Reset({ setBill, onReset1, onReset2 }) {
  return (
    <button
      onClick={() => {
        setBill(0);
        onReset1(0);
        onReset2(0);
      }}
    >
      Reset
    </button>
  );
}
