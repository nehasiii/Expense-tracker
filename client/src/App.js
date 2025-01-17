import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider } from "./context/GLobalState";
import './App.css'

function App() {
  return (
    <GlobalProvider>
     <div className="main-container">
     <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      </div>
     </div>
    </GlobalProvider>
  );
}

export default App;
