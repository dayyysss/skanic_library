import React,{useState} from 'react'

function Submenu({menu={},toggle =false}) {
  const [toggleSideMenu,setToggleSideMenu] = useState(false)
    const clickSumenu=()=>{
      setToggleSideMenu(!toggleSideMenu)
    }
  return (
    <>
      <div className={` flex items-center gap-5 p-1  relative hover:bg-red-600  cursor-pointer `}>
            <div> <i className={` text-xl ml-2 text-[20px] ${menu.icon}`}></i></div>
            {!toggle&&<div className={` font-mono  text-[20px] truncate `}>{menu.name}</div>}
            {!toggle&&menu?.children&&<i className={`${toggleSideMenu?'bi bi-caret-up-fill':'bi bi-caret-down-fill'} text-[20px] font-extrabold text-w-[20px]  absolute right-0`} onClick={clickSumenu}  ></i>}
      </div>
      {toggleSideMenu&&menu?.children.map((item,index)=>{
        return <div className={`${!toggle?'pl-3':''}  `}><Submenu menu={item} toggle={toggle} /></div>

      })}
    </>
  )
}

export default Submenu