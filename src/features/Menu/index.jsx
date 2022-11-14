import React from "react";
import menu from './menu.jpg'

const Menu = () => {

    const pemilihan =[
        {
            id: 1,
            name: 'Pemilihan Ketua OSIS',
            status: ''
        },
        {
            id: 2,
            name: 'Pemilihan Pradana Putra',
            status: ''
        },
        {
            id: 3,
            name: 'Pemilihan Pradana Putri',
            status: ''
        }
    ]

    return (
        <div className="mx-auto text-center p-3 max-w-[500px]">
            <img src={menu} className="rounded-3xl py-25 md:col-span-2 md:w-full mb-10"/>

            <div className="flex flex-col sm:flex-row gap-5 md:grid grid-cols-2 grid-rows-1 ">
                
                {pemilihan.map(p => (
                    <button key={p.id} className="bg-primary py-5 px-10 rounded rounded-md">
                        {p.name}
                    </button>
                ))}

                <button className="py-5 px-10 rounded rounded-md bg-secondary text-white">
                    Hasil Pemilihan
                </button>
            </div>
            
        </div>    
        
    )
}

export default Menu