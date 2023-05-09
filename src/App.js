import './App.css';
import Fetch from './components/fetch';
import AxiosPoke from './components/axios';

function App() {
  return (
    <div className="App">
      {/* fetch api */}
      <Fetch />
      {/* axios api */}
      < AxiosPoke />
    </div>
  );
}

export default App;
