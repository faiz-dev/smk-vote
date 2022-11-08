import React from "react";

const Choice = ({data,selected, onClick}) => {
    
    return (
        <div className={`card mb-3 py-3 flex items-start gap-2 ${selected == data.id ? 'card-primary text-white' : ''}`} onClick={() => onClick(data.id)}>
            <img src={data.img} alt="" className="rounded-full w-[40px]" />
            <div>
                <h2 className="text-[13px]">Ketua: {data.calonKetua} <br /> Wakil: {data.calonWakil}</h2>
            </div>
        </div>
    )
}

export default Choice