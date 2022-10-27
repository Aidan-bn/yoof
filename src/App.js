import './App.css';
import image from './pic/dwn.png';
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
              <h4>Software Development</h4>
              {/* <img src={image} className="illustration" alt='illustration' /> */}
              <img src={codes} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
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
              <h4>Telecom Services</h4>
              {/* <img src={image} className="illustration" alt='illustration' /> */}
              <img src={telecom} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
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
              <h4>Graphic & Animation</h4>
              {/* <img src={image} className="illustration" alt='illustration' /> */}
              <img src={graphic} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
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
              
              {/* <img src={image} className="illustration" alt='illustration' /> */}
              <img src={consult} className='picha' alt='graphics' />
            </div>
            <div className='work-description'>
            <h4>Consultancy Work</h4>
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro,
              Hey gut will you meet nw akeuun to see them tomorro
              Hey gut will you meet nw akeuun to see them tomorro
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
