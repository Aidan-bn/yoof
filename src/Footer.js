import './App.css';
// import humberger from './pic/menu.png';
// import logo from './pic/logofinal.png';
// import graphic from './pic/pen.svg';
// import telecom from './pic/tower.svg';
// import codes from './pic/code.svg';
// import consult from './pic/consult.svg';
function Footer() {
    return(
        <section className='footer'>
        <h4>Reach Us!</h4>
        <hr />
        <form>
          <label>Name: </label>
          <input type="text" class="name" id="name" required placeholder='Enter your name ..'></input>
          <label>Email: </label>
          <input type="text" class="email" id="email" required placeholder='Enter email ..'></input>
          <label>Message: </label>
          <textarea class='message' id='message' required placeholder='Enter message'/>
          <button className='submit'>Submit</button>
        </form>

        <div className='bottom-footer'>
          <h3>Our Useful Links</h3>
          <div className='footer-links'>
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
          
        </div>
          <div className='copyright'>&copy; 2022 | YOOF GALORE Co. Ltd</div>
      </section>
    );
}
export default Footer;