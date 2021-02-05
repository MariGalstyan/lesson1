import logo from './logo.svg';
import './App.css';
import Red from './colors/Red';
import Green from './colors/Green';
import Blue from './colors/Blue';
import SellOnline from './SellOnline/SellOnline';
import MonthlyFee from './SellOnline/MonthlyFee';
import SetUp from './SellOnline/SetUp';
import Counter from './Counter/Counter';

function App() {
  return (
    <div className="sell_wrapper">
      <SellOnline />
      <MonthlyFee />
      <SetUp />
      <Counter />
    </div>
  );
}

export default App;
