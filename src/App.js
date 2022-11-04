import './App.css';
import humberger from './pic/menu.png';
import logo from './pic/logofinal.png';


function App() {
  return (
    <div className="App">
      <section className='section-header'>
        <div className='nav-bar'>
          <img src={logo} className='img-logo' alt='Company Logo' />
          <ul className='nav-link' >
            <li className='nav-list'>Home</li>
            <li className='nav-list'>About</li>
            <li className='nav-list'>Contact</li>
          </ul>
        </div>
        <div className='humberger'>
          <img src={humberger} className='humberger-logo' alt='humberger' />
        </div>
        <div className='logo-mobile'>
          <img src={logo} className='mob-logo' alt='humberger' />
        </div>
        <header className="App-header">
          <h1>
            Tech Smart
          </h1>
          <p className='motto'>
            # You're needs, # our working area
          </p>
          <div className='search-desk'>
          <input type='text' name='search' className='inputSearch-desk'></input>
          <button className='btnSearch-desk' id='btnSearch'>Search</button>
        </div>
        </header>
        <div className='search'>
          <input type='text' name='search' className='inputSearch'></input>
          <button className='btnSearch' >Search</button>
        </div>
      </section>
    </div>
  );
}
export default App;
