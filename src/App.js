import logo from './logo.svg';
import './App.css';
import Red from './colors/Red';
import Green from './colors/Green';
import Blue from './colors/Blue';
import SellOnline from './SellOnline/SellOnline';
import MonthlyFee from './SellOnline/MonthlyFee';
import SetUp from './SellOnline/SetUp';

function App() {
  return (
    <div className="sell_wrapper">
      <SellOnline />
      <MonthlyFee />
      <SetUp />
    </div>
  );
}

export default App;
