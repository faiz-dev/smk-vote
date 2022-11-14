import React from "react";

const VotingOsis = () => {
    return(
        <div className="">
        <h1 className="font-bold text-center pt-16 text-3xl">VOTING OSIS</h1>
        <p className="text-center">Klik gambar kandidat pilihan anda <br /> untuk memberi voting</p>
        <div className="md:flex flex-row">
            <img src="https://dummyimage.com/333x193/81a9b8/fff" className="rounded-3xl pb-1 mx-auto"/>
            <img src="https://dummyimage.com/333x193/81a9b8/fff" className="rounded-3xl pb-1 mx-auto"/>
            <img src="https://dummyimage.com/333x193/81a9b8/fff" className="rounded-3xl mx-auto"/>
        </div>
        <button className="bg-[url('https://dummyimage.com/172x45/7BA9AC/fff&text=+')] text-white mt-5 mx-auto px-14 py-3 rounded-3xl md:display: block">Submit</button>
    </div>
    )
}

export default VotingOsis