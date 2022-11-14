import React from "react";
import menu from './menu.jpg'

const HalPortal = () => {

    const dataMenu =[
        {
            id: 1,
            img: 'https://dummyimage.com/300x50/13688f/fff.png&text=OSIS'
        },
        {
            id: 2,
            img: 'https://dummyimage.com/300x50/13688f/fff.png&text=PRADANA'
        },
        {
            id: 3,
            img: 'https://dummyimage.com/300x50/13688f/fff.png&text=PRADANA'
        },
        {
            id: 4,
            img:'https://dummyimage.com/300x50/13688f/fff.png&text=HASIL'
        }

    ]

    return (
     
        <div class="mx-auto text-center p-3 md:grid grid-cols-2 grid-rows-1">
            <img src={menu} className="rounded-3xl py-25 md:col-span-2 md:w-full"/>

            
            
        {dataMenu.map(m => (
            <div> 
                <img  className="mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5  cursor-pointer hover:bg-sky-600" src={m.img} />
            </div>
        ))}
            {/* <div class="  "> 
                
                    <img className="mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5  cursor-pointer " src="https://dummyimage.com/300x50/13688f/fff.png&text=OSIS"/>
               
                
                    <img className="mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5 cursor-pointer " src="https://dummyimage.com/300x50/13688f/fff.png&text=PRADANA"/>
                
            </div>
            
            <div className=" ">
                
                    <img className=" mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5 cursor-pointer  " src="https://dummyimage.com/300x50/13688f/fff.png&text=PRADANI"/>
               
                    <img className=" mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5 cursor-pointer   " src="https://dummyimage.com/300x50/13688f/fff.png&text=HASIL"/>
               
            </div> */}
        </div>    
        
    )
}

export default HalPortal