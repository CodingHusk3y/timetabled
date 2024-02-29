import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Schedule for 7 days in NYC</h1>
      <h2>Welcome to NYC, this calenda will provide great information about the city</h2>
      <Calendar />      
    </div>
  )
}

export default App