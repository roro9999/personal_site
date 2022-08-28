import React, {useState} from 'react';
import './App.css';
import Neon from './Static/neon.mp4';
import Milton from './Static/milton.mp4';
import Ballz from './Static/ballz.mp4';
import { BsTwitter, BsDribbble } from 'react-icons/bs';


function App() {

  return (
    <div className='ml-32 mr-32 mt-10 md:ml-4 md:mr-4'>
      <div className='w-full flex justify-end'>
        <div className='flex'>
         <a href='https://twitter.com/roro_9999_'><button className='flex items-center p-2.5 text-2xl bg-[#1D1D2C] rounded-full mr-3 hover:text-[#FDE68A] hover:bg-transparent'><BsTwitter/></button></a>
          <button className='flex items-center p-2.5 text-2xl bg-[#1D1D2C] rounded-full hover:text-[#FDE68A] hover:bg-transparent'><BsDribbble/></button>
        </div>
      </div>

      <div className='flex justify-center mt-44 md:mt-32'>
        <div>
          <p className='text-7xl font-medium text-center text-[#FDE68A]' id="title">roro</p>
          <div className='mt-10'>
            <p className='text-md text-gray-600'>Known Technogly</p>
          <div className='flex mt-2.5'>
            <p className='mr-4 text-xl font-medium'>Javascript</p>
            <p className='mr-4 text-xl font-medium'>React</p>
            <p className='mr-4 text-xl font-medium'>Tailwind</p>
            <p className='text-xl font-medium'>Figma</p>
          </div>
          </div>
        </div>
      </div>


      <div className='mt-48 mb-32'>
        <p className='text-md text-gray-600'>Work</p>
        <div className='w-full bg-gray-100 h-[55rem] rounded-md overflow-scroll border border-gray-200 mt-2.5'>
          <div className='flex mt-12 md:flex-col'>
            <div className='w-1/3 flex items-center ml-10 md:w-full md:ml-6'>
              <div>
                <p className='text-5xl text-[#000] font-medium' id='title'>Neon Labs</p>
                <p className='text-gray-400 text-lg mt-4'>08/10/22 <span className='ml-6'>Designed & Developed</span></p>
              </div>
            </div>
            <div className='w-2/3 mr-12 items-center flex md:w-full md:mt-6'>
            <video muted loop autoplay="true" className="rounded-md m-2 md:ml-0">
              <source src={Neon} type="video/mp4"></source>
              Unsupported video
            </video>
            </div>
          </div>
          <hr className='mt-16 ml-10 mr-10'></hr>

          <div className='flex mt-16 md:flex-col mb-12'>
            <div className='w-1/3 flex items-center ml-10 md:w-full md:ml-6'>
              <div>
                <p className='text-5xl text-[#000] font-medium' id='title'>Milton Bot</p>
                <p className='text-gray-400 text-lg mt-4'>02/05/22 <span className='ml-6'>Designed & Developed</span></p>
              </div>
            </div>
            <div className='w-2/3 mr-12 items-center flex md:w-full md:mt-6'>
            <video muted loop autoplay="true" className="rounded-md m-2 md:ml-0">
              <source src={Milton} type="video/mp4"></source>
              Unsupported video
            </video>
            </div>
          </div>
          <hr className='mt-16 ml-10 mr-10'></hr>

          <div className='flex mt-16 md:flex-col mb-12'>
            <div className='w-1/3 flex items-center ml-10 md:w-full md:ml-6'>
              <div>
                <p className='text-5xl text-[#000] font-medium' id='title'>Ballz NFT</p>
                <p className='text-gray-400 text-lg mt-4'>02/05/22 <span className='ml-6'>Developed</span></p>
              </div>
            </div>
            <div className='w-2/3 mr-12 items-center flex md:w-full md:mt-6'>
            <video muted loop autoplay="true" className="rounded-md m-2 md:ml-0">
              <source src={Ballz} type="video/mp4"></source>
              Unsupported video
            </video>
            </div>
          </div>

          <hr className='mt-16 ml-10 mr-10'></hr>

<div className='flex mt-16 md:flex-col mb-12 justify-center pb-24 md:pb-20 md:mt-12'>
  <div>
    <p className='text-center text-4xl font-medium text-[#000] mt-16 md:mt-12' id="title">Ready to connect?</p>
    <div className='flex justify-center'>
      <a href='https://discord.gg/TMxfQFms'><button className='pl-5 p-2 pr-5 bg-[#000] mt-8 rounded-md text-lg hover:bg-transparent hover:text-[#000]'>Join Discord</button></a>
    </div>
    <p></p>
  </div>

</div>

        </div>
      </div>
     

    </div>
  );
}

export default App;
