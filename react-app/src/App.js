
import './App.css';
//import Greet from'./components/Greet/Greet'
import {Greet} from'./components/Greet/Greet'
import Welcome from'./components/Greet/Welcome'
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <div>Hello world from crap</div>
       <Greet name="muskal"><p>Hi muskal we Greet You</p></Greet>
       <Greet name="paskal"/>
       <Greet name="qaskal"/>

       <Welcome name="muskal"/>
       <Welcome name="paskal"/>
       <Welcome name="qaskal"/>
      </header>
    </div>
  );
}

export default App;
