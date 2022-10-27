import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello There
        </h1>
        <p className='motto'>
           # You're needs, # our working area
        </p>

      </header>
      <div className='search'>
        <input type='text' name='search' className='inputSearch'></input>
        <button className='btnSearch'>Search</button>
      </div>
    </div>
  );
}

export default App;
