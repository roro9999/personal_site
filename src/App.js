import React, {useState} from 'react';
import './App.css';
import { FaDribbble, FaTwitter, FaDiscord, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import milton from './Static/milton.webp'
import nocap from './Static/nocap.webp'
import ballz from './Static/ballz.webp'
import Neon from './Static/neon.webp'
import Fade from 'react-reveal/Fade';
import { Turn as Hamburger } from 'hamburger-react'


function App() {
  const [isOpen, setOpen] = useState(false)
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <div className='header'>
        <a href='#welcome' id="last">About</a>
        <a href='#projects'>Projects</a>
        <button className='burger' onClick={toggleModal}><Hamburger toggled={isOpen} toggle={setOpen} /></button>
      </div>
      <div>
        <img className='test-img' src = "https://cdn.discordapp.com/attachments/866078803611877416/1005306343365824582/unknown.png"></img>
      </div>
      <Fade bottom>
      <div className='flex-center'>
        <div className='zindex'>
        <p className='welcome' id="welcome">roro.</p>
        <p className='desc'>Design and code blah blah blah</p>
            <p className='desc'>-- Frontend dev --</p>
            <a href='#projects'><p className='view'>View projects <span><BsMouse/></span></p></a>
        </div>

</div>
      </Fade>


      <div className='socail'>
        <a href='https://dribbble.com/roro9999'><button className='so-btn'><span><FaDribbble/></span></button></a>
        <a href='https://twitter.com/roro9999_'><button className='so-btn'><span><FaTwitter/></span></button></a>
        <button className='so-btn'><span><FaDiscord/></span></button>
        <div className='line'></div>
      </div>



<Fade>
<div className='flex'>
          <p className='projects' id="projects">2022 Projects.</p>
      </div>
      <div className='showcase-container'>
        <div className='item'>
          <img className='milton' src = {milton} alt="milton"></img>
          <div className='div-text'>
          <a className='text-m'>Milton Bot</a>
          <a className='text-m-2'><FiFigma/></a>
          <a className='text-m-3'><FaHtml5/></a>
          <a className='text-m-3'><FaCss3Alt/></a>
          </div>
        </div>
        <div className='item'>
        <img className='milton' src = {nocap} alt="nocat"></img>
          <div className='div-text-2'>
          <a className='text-m'>nocap.ai</a>
          <a className='text-m-5'><FiFigma/></a>
          <a className='text-m-3'><FaReact/></a>
          <a className='text-m-3'><FaCss3Alt/></a>
          </div>
        </div>      
        <div className='item'>
        <img className='milton' src = {ballz} alt="ballz"></img>
        <div className='div-text-2'>
          <a className='text-m'>Ballz NFT</a>
          <a className='text-m-4'><FaReact/></a>
          <a className='text-m-3'><FaCss3Alt/></a>
          </div>
        </div>
        <div className='item'>
        <img className='milton' src = {Neon} alt="neon"></img>
        <div className='div-text-2'>
          <a className='text-m'>Neon Labs</a>
          <a className='text-m-2'><FiFigma/></a>
          <a className='text-m-3'><FaReact/></a>
          <a className='text-m-3'><SiTailwindcss/></a>
          </div>
        </div>
      </div>
</Fade>
       




 


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='flex-mobile'>
            <p href='#welcome' className='mobile-a'>About</p>
            <p href='#projects' className='mobile-a'>Projects</p>
              </div>

              <div className='socail-mobile'>
        <button className='so-btn'><span><FaDribbble/></span></button>
        <button className='so-btn'><span><FaTwitter/></span></button>
        <button className='so-btn'><span><FaDiscord/></span></button>
      </div>
 
        </div>
        </div>
      )}


    </div>
  );
}

export default App;
