import {} from 'react'
import opensea from '../assets/OpenSea-Full-Logo (light).png'

export default function Navbar() {
  return (
      <div className="all flex justify-between ">
        <div className=' p-4 bg-black items-center  '>
            <div className="flex items-center ps-4 font-roboto font-bold">
                <img src={opensea} className='max-w-36 pe-8' ></img>
                <ul className='text-white flex items-center '>
                  <li className='h-8 w-0.5 bg-white'></li>
                    <li id='drop' className='ps-10'>Drops</li>
                    <li id='stats' className='ps-8'>Stats</li>
                    <li id='create' className='ps-8'>Create</li>
                </ul>
            <div className=""></div>
              <input className='h-10 max-w-md w-full rounded-lg bg-transparent ring-white ' type='search' placeholder='Search'></input>
            </div>
  
        </div>
        </div>
        

    
  )
}
