import CPGChart from './components/charts/CPGChart';
import TotalGoals from './components/charts/TotalGoals';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <CPGChart />
        <TotalGoals />
      </div>
    </div>
  );
}

export default App;
