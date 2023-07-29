import logo from './logo.svg';
import './App.css';
import Greetingcard from './Component/Greetingcard';

function App() {
  return (
    <div className="App">
      <Greetingcard title = "Happy Birthday" birthdayperson = "Mom" color = "red" color2="purple" bgColor="yellow"/>
    </div>
  );
}

export default App;
