
import './App.css';
import ErrorDemo from './ErrorDemo'
import CounterDemo from './CounterDemo'
import ErrorBoundaries from './ErrorBoundaries/ErrorBoundaries'
function App() {
  return (
    <div className="App">
      <h1>Welcome to Error Boundary</h1>
      <ErrorBoundaries>
      <ErrorDemo name="Dipesh" />
      </ErrorBoundaries>
      <ErrorBoundaries>
      <CounterDemo/>
      </ErrorBoundaries>
      

    </div>
  );
}

export default App;
