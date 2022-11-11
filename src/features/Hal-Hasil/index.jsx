import React from "react";

const HalHasil = () => {
    return (
        <div className="mx-auto text-center p-3 md:grid gap-7 grid-cols-3 grid-rows-3">
            <div className="bg-gray-400 p-20 font-bold mx-auto rounded-3xl md:px-35 py-25 cursor-move ">
                <h1>
                    HASIL VOTING
                </h1>
                <img src="" alt="JPG" loading="lazy" />
            </div>
            
            <div  className="bg-gray-400 p-16 font-bold mx-auto mt-10 rounded-3xl md:mt-20 cursor-pointer hover:bg-gray-500">
                <h1>
                    Osis
                </h1>
                <img src="" alt="Osis" loading="lazy" />
            </div>
            <div className="bg-gray-400 p-16 font-bold mx-auto mt-10 rounded-3xl md:mt-20 cursor-pointer hover:bg-gray-500">
                <h1>
                    Pradana Putra
                </h1>
                <img src="" alt="Pradana Putra" loading="lazy" />
            </div>
            <div className="bg-gray-400 p-16 font-bold mx-auto mt-10 rounded-3xl md:mt-20 cursor-pointer hover:bg-gray-500">
                <h1>
                    Pradana Putri
                </h1>
                <img src="" alt="Pradana Putri" loading="lazy" />
            </div>
            <button className="bg-cyan-400 mt-10 p-2 px-10 text-white rounded-2xl md:hover:bg-cyan-500">
                HOME
            </button>
        </div>
    )
}

export default HalHasil