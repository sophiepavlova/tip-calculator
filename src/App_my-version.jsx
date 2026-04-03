import { useState } from 'react';
import './App.css';

export default function App() {
  const [bill, setBill] = useState('');
  const [satisfaction, setSatisfaction] = useState(0);
  const [satisfactionSecond, setSatisfactionSecond] = useState(0);
  const tipsPercetns = Number(satisfaction) + Number(satisfactionSecond);
  const tipAmount = (Number(bill) * tipsPercetns) / 100;
  console.log(tipAmount);
  // console.log(Number(satisfaction));
  // console.log(Number(satisfactionSecond));
  // console.log(tipsPercetns);
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        text='How did you like the service?'
        satisfaction={Number(satisfaction)}
        setSatisfaction={setSatisfaction}
      />
      <SelectPercentageSecond
        text='How did your friend like the service?'
        satisfactionSecond={satisfactionSecond}
        setSatisfactionSecond={setSatisfactionSecond}
      />
      <Output bill={bill} tipAmount={tipAmount} />
      <Reset
        setBill={setBill}
        setSatisfaction={setSatisfaction}
        setSatisfactionSecond={setSatisfactionSecond}
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

function SelectPercentage({ text, satisfaction, setSatisfaction }) {
  return (
    <div>
      <p>{text}</p>
      <select
        value={satisfaction}
        onChange={(e) => setSatisfaction(e.target.value)}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was ok (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function SelectPercentageSecond({
  text,
  satisfactionSecond,
  setSatisfactionSecond,
}) {
  return (
    <div>
      <p>{text}</p>
      <select
        value={satisfactionSecond}
        onChange={(e) => setSatisfactionSecond(e.target.value)}
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

function Reset({ setBill, setSatisfaction, setSatisfactionSecond }) {
  return (
    <button
      onClick={() => {
        setBill(0);
        setSatisfaction(0);
        setSatisfactionSecond(0);
      }}
    >
      Reset
    </button>
  );
}
