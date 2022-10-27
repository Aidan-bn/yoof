import './App.css';
import image from './pic/dwn.png';

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
              <img src={image} className="illustration" />
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
              <img src={image} className="illustration" />
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
              <img src={image} className="illustration" />
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
              <h4>Consultancy Work</h4>
              <img src={image} className="illustration" />
            </div>
            <div className='work-description'>
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
