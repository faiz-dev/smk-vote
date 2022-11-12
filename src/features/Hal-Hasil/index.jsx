import React from "react";

const HalHasil = () => {
    const dataVotes = [
        {
            id: 1,
            name: 'OSIS',
            img: 'https://dummyimage.com/300x100/81A9B8/fff&text=OSIS'
        }
    ]
    
    return (
        <div className="mx-auto text-center p-3 md:grid grid-cols-3 grid-rows-2">
            <div className="bg-gray-400 p-20 font-bold mx-auto rounded-3xl py-25 md:col-span-3 md:w-full">
                <h1>
                    HASIL VOTING
                </h1>
                <img src="" alt="JPG" loading="lazy" />
            </div>
            
            {dataVotes.map(v => (
                <div 
                    className="bg-gray-400 p-16 font-bold mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5 cursor-pointer hover:bg-gray-500"
                    key={v.id}>
                    <h1>
                        {v.name}
                    </h1>
                    <img src={v.img} alt={v.name} loading="lazy" className="w-full" />
                </div>
            ))}

            {/* <div className="bg-gray-400 p-16 font-bold mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5 cursor-pointer hover:bg-gray-500">
                <h1>
                    Pradana Putra
                </h1>
                <img src="" alt="Pradana Putra" loading="lazy" />
            </div>
            <div className="bg-gray-400 p-16 font-bold mx-auto mt-10 rounded-3xl md:mt-20 md:w-4/5 cursor-pointer hover:bg-gray-500">
                <h1>
                    Pradana Putri
                </h1>
                <img src="" alt="Pradana Putri" loading="lazy" />
            </div> */}
            <button className="bg-cyan-400 mt-10 p-2 px-10 mx-auto text-white rounded-xl md:mt-20 md:col-start-2 md:hover:bg-cyan-500">
                HOME
            </button>
        </div>
    )
}

export default HalHasil