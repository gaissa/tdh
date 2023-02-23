import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-top-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LFG!
        </p>
		
		<div className="App-content">
		  <p>
		    say what?
		  </p>		  
		</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          chill...
        </a>
      </header>
    </div>
  );
}

export default App;
