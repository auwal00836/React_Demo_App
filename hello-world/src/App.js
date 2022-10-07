import './App.css';
import './component/Greetings';
import Greetings from './component/Greetings';
import Counter from './component/Counter';
import Car from './component/Car';

function App() {
  return (
    <div className="App">
      <Greetings/>
      <Counter/>
      <Car/>
    </div>
  );
}

export default App;
