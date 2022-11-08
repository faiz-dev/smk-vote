import React from "react";

const KKInput = ({type, label, value = "", onChange, error="", success="", disabled=false, readonly=false}) => {
    const actioAnOnchange = (e) => {
        if (disabled || readonly) {
            return
        }
        onChange(e.target.value)
    }
    return (
        <div className="flex flex-col gap-1 mb-3 mt-3">
            <label className="text-gray-400">{label}</label>
            <input 
                className={
                    `border border-gray-400  rounded px-2 text-[0.90rem] py-2
                    ${error != "" ? 'border-error' : ''} 
                    ${success != "" ? 'border-primary' : ''}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${readonly ? 'cursor-not-allowed' :''}`
                    
                }
                type={type} 
                value={value} 
                onChange={actioAnOnchange}
                placeholder={label} />
            {error == "" ? '' : (
                <span className="text-error text-[0.70rem]">{error}</span>
            )}
        </div>
    )
}

export default KKInput