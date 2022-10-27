import './App.css';
import graphic from './pic/pen.svg';
import telecom from './pic/tower.svg';
import codes from './pic/code.svg';
import consult from './pic/consult.svg';

function App() {
  return (
    <div className="App">
      <section className='section-header'>
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
      </section>
      

      <section className='work'>
        <h2>Our Service</h2>
        
        <div className='parent-work'>
          <div className='child-work'>
            <div className='image-work'>
              <img src={codes} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
            <h4>Software Development</h4>
            <hr />
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro

              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro
            </div>
          </div>
        </div>

        <div className='parent-work'>
          <div className='child-work'>
            <div className='image-work'>
              <img src={telecom} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
            <h4>Telecom Services</h4>
            <hr />
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro
              Hey gut will you meet nw akeuun to see them tomorro
            </div>
          </div>
        </div>

        <div className='parent-work'>
          <div className='child-work'>
            <div className='image-work'>
              <img src={graphic} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
            <h4>Graphic & Animation</h4>
            <hr />
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro
              Hey gut will you meet nw akeuun to see them tomorro
            </div>
          </div>
        </div>

        <div className='parent-work'>
          <div className='child-work'>
            <div className='image-work'>
              <img src={consult} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
            <h4>Consultancy Work</h4>
            <hr />
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro
              Hey gut will you meet nw akeuun to see them tomorro
            </div>
          </div>
        </div>
      </section>

      <section className='partners'>
        <div className='project-description'>
            <h5>Title</h5>
            <p>Sample of our project , feedback from our customer</p>
        </div>
        <div className='partner-logo'>
          <p>Partiners logo goes here</p>
        </div>
      </section>

      <section className='google-map'>
        <h2>Our Google map goes here</h2>
      </section>

      <section className='footer'>
        <h4>Reach Us!</h4>
        <hr />
        <form>
          <label>Name: </label>
          <input type="text" class="name" id="name" placeholder='Enter your name ..'></input>
          <label>Email: </label>
          <input type="text" class="email" id="email" placeholder='Enter email ..'></input>
          <label>Message: </label>
          <textarea class='message' id='message' placeholder='Enter message'/>
          <button className='submit'>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
