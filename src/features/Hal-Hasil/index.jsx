import React from "react";
import { useNavigate } from "react-router-dom";
import hasil from './hasil.jpg'

const HalHasil = () => {
    const navigate = useNavigate()
    
    const dataVotes = [
        {
            id: 1,
            name: 'OSIS',
            img: 'https://dummyimage.com/300x100/81A9B8/fff&text=OSIS'
        },
        {
            id: 2,
            name: "PRADANA PUTRA",
            img: 'https://dummyimage.com/300x100/81A9B8/fff&text=Pradana Putra'
        },
        {
            id: 3,
            name: "PRADANI PUTRI",
            img: 'https://dummyimage.com/300x100/81A9B8/fff&text=Pradani Putri'
        }
    ]

    const goToMenu = () => {
        navigate('/menu')
    }
    
    return (
        <div className="mx-auto lg:grid grid-cols-3 grid-rows-3 ">
            <img src={hasil} alt="JPG" loading="lazy" className="col-span-3 mx-auto rounded-3xl cursor-move lg:w-11/12 lg:h-96"/>
            
            {dataVotes.map(v => (
                <div className="mt-10 lg:mx-10">
                    <h1 className="ml-4 font-bold lg:ml-10 lg:text-3xl">
                        {v.name}
                    </h1>

                    <div 
                        className="bg-div p-3 font-bold mx-auto rounded-3xl lg:mt-0 lg:w-full lg:h-fit cursor-pointer lg:mx-0 hover:bg-gray-500"
                        key={v.id}>
                            <div className="inline-flex">
                                <div className=" rounded-full bg-bulat w-14 h-14 mb-3">
                                    <h1 className="font-bold text-center pt-2">1</h1>
                                </div>
                                <div className="pl-3">
                                    <h2 className="font-semibold">Rahmat & Andika</h2>
                                    <progress className="w-52 h-6" value="75" max="100"></progress>
                                </div>
                            </div>
                            
                            <div className="inline-flex">
                                <div className=" rounded-full bg-bulat w-14 h-14 mb-3">
                                    <h1 className="font-bold text-center pt-2">2</h1>
                                </div>
                                <div className="pl-3">
                                    <h2 className="font-semibold">Rahmat & Andika</h2>
                                    <progress className="w-52 h-6" value="25" max="100"></progress>
                                </div>
                            </div>

                            <div className="inline-flex">
                                <div className=" rounded-full bg-bulat w-14 h-14 ">
                                    <h1 className="font-bold text-center pt-2">3</h1>
                                </div>
                                <div className="pl-3">
                                    <h2 className="font-semibold">Rahmat & Andika</h2>
                                    <progress className="w-52 h-6" value="95" max="100"></progress>
                                </div>
                            </div>
                    </div>
                </div>
            ))}

            <div className="text-center lg:col-span-3">
                <button 
                    className="bg-button mt-10 p-2 px-10 text-white rounded-xl lg:mt-0 lg:hover:bg-cyan-500 lg:w-52 lg:h-16 lg:text-2xl"
                    onClick={goToMenu}>
                    BACK
                </button>
            </div>
        </div>
    )
}

export default HalHasil