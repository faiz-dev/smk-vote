import React from "react";

const goToVoting = () => {
    navigation
}

const VotingPramuka = () => {
    
    return(
        <div>
            <h1 className="text-center text-4x1 font-bold sm:text-5xl mt-6 mb-4 md:text-left">VOTING PRADANA</h1>
            <p className="text-center text-2xl">Klik gambar kandidat pilihan anda <br />untuk memberi voting</p>
            <h1 className="text-3xl md:text-4xl text-left font-bold mt-12 mb-4 ">Pradana Putra</h1>
            <div className="md:flex ">
            <div className="md:flex ">
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl w-150px h-150px md:w-300px h-300px" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl m-auto w-150px h-150px md:w-300px h-300px" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl w-150px h-150px md:w-300px h-300px" alt="" />
            </div>
            <h1 className="text-right md:text-left text-4xl font-bold mt-12 mb-4 ">Pradana Putri</h1>
            <div className="md:flex">
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl m-auto" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl" alt="" />
            </div>
            </div>
            <button
            onClick = {goToVoting} 
            className="w-52 block m-auto mt-10 px-4 py-3 text-2xl text-white rounded-xl bg-teal-700">SUBMIT</button>
        </div>
    )
} 

export default VotingPramuka
