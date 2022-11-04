import './App.css';
import graphic from './pic/pen.svg';
import telecom from './pic/tower.svg';
import codes from './pic/code.svg';
import consult from './pic/consult.svg';

function Cards(){
    return(
        <section className='work'>
        <h2>Our Service</h2>
        <div className='content-work'>
          <div className='parent-work'>
            <div className='child-work'>
              <div className='image-work'>
                <img src={codes} className='picha' alt='graphics' />
              </div>
              <div className='work-description'>
              <h4>Software Development</h4>
              <hr />
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
        </div>
      </section>
    );
}
export default Cards;