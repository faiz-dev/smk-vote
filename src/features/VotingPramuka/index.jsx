import React from "react";

const goToVoting = () => {
    navigation
}

const VotingPramuka = () => {
    
    return(
        <div>
            <h1 className="text-center text-5xl font-bold mt-6 mb-4">VOTING PRADANA</h1>
            <p className="text-center text-2xl">Klik gambar kandidat pilihan anda <br />untuk memberi voting</p>
            <h1 className="text-4xl font-bold mt-12 mb-4">Pradana Putra</h1>
            <div className="flex">
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl m-auto" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl" alt="" />
            </div>
            <h1 className="text-4xl font-bold mt-12 mb-4">Pradana Putri</h1>
            <div className="flex">
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl m-auto" alt="" />
                <img src="https://dummyimage.com/300x300/000/fff.png" className="rounded-2xl" alt="" />
            </div>
            <button
            onClick = {goToVoting} 
            className="w-52 block m-auto mt-10 px-4 py-3 text-2xl text-white rounded-xl bg-teal-700">SUBMIT</button>
        </div>
    )
} 

export default VotingPramuka
