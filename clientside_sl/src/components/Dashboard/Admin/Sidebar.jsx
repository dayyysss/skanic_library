import { useState } from 'react'
import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../../public/vite.svg'
import 'react-icons/fa'
import { MENU_ITEMS } from '../../Menu';
import Submenu from '../../Submenu';
function App() {
  const [toggle, setToggle] = useState(false)

  const clickHamberg =()=>{
    setToggle(!toggle)
  }

  return (
    <div className={`${toggle?'w-[67px]':'w-[305px]'}  overflow-y-hidden  transition-all duration-1000 bg-slate-950 h-screen rounded-r-md text-white`}>
      <i className="bi bi-list text-[35px] w-[35px] h-[35px] p-3 cursor-pointer hover: rotate-180" onClick={clickHamberg} ></i>
      <div className='p-2 flex flex-col gap-3 h-[93vh]   overflow-y-auto'>
        {MENU_ITEMS?.map((item,index)=>{
          return (
            <>
            {!item?.children?<div className=' flex p-1  items-center gap-5 hover:bg-red-600 rounded-lg cursor-pointer '>
            <div> <i className={` ${!toggle?'':''}  text-xl ml-2 ${item.icon}`}></i></div>
            {<div className={` font-mono ${toggle?' duration-1000 hidden ':'visble'} text-[20px] truncate  `}>{item.name}</div>}
            </div>:<div className=' '><Submenu menu={item} toggle={toggle} /></div>  }
            </>
          )
        })}
        {/* <div className=' flex gap-5 mt-auto cursor-pointer  '>
            <div> <i className={` ${!toggle?'':''}  text-xl ml-2 bi bi-door-open-fill`}></i></div>
            <div className={` font-mono ${toggle?' duration-1000 hidden ':'visble'} text-[20px] truncate  `}>Log Off</div>
      </div> */}
      </div>
   
    </div>

  )
}

export default App