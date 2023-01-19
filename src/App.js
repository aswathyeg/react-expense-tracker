import "./App.css";
import { Balance } from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import { History } from "./components/History";
import AddTransaction from "./components/AddTransaction";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="expense">
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
