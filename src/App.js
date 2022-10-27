import './App.css';
import graphic from './pic/pen.svg';
import telecom from './pic/tower.svg';
import codes from './pic/code.svg';
import consult from './pic/consult.svg';

function App() {
  return (
    <div className="App">
      <section className='section-header'>
        <div className='nav-bar'>
          <h1>LOGO</h1>
          <ul className='nav-link' >
            <li className='nav-list'>Home</li>
            <li className='nav-list'>About</li>
            <li className='nav-list'>Contact</li>
          </ul>
        </div>
        <div className='humberger'>
          <h3>humberger</h3>
        </div>
        <header className="App-header">
          <h1>
            Hello There
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

        <div className='bottom-footer'>
          <h3>Our Useful Links</h3>
          <div className='inner-bottom-footer'>
            <div className='left-footer'>
              <h6>Our Contact</h6>
                  <ul>
                    <li>Email: info@yoofgalore.co.tz</li>
                    <li>P.O.Box: 2643 Dodoma</li>
                    <li>Phone No:</li>
                    <li>+255 753 122 250</li>
                    <li>+255 753 122 250</li>
                    <li>+255 753 122 250</li>
                  </ul>
            </div>
            <div className='middle-footer'>
              <h6>Our Values</h6>
                  <ul>
                    <li>Motto</li>
                    <li>Mission</li>
                    <li>Vision</li>
                  </ul>
            </div>
            <div className='right-footer'>
              <h6>Feature project</h6>
                <ul>
                  <li>Mkalama house</li>
                  <li>Mkalama house</li>
                  <li>Mkalama house</li>
                  <li>Mkalama house</li>
                </ul>
            </div>
          </div>
        </div>
          <div className='copyright'>&copy; 2022 | YOOF GALORE Co. Ltd</div>
      </section>
    </div>
  );
}

export default App;
