import React from 'react';

const CustomInput = ({ label, type, id, onChange, value, errorMessage, ...props }) => {
    return (
        <div className="relative labeled-input m-auto">
            <label
                htmlFor={id}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white inputLabel
                    ${value ? 'top-1/2' : 'text-base'}`}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                onChange={onChange}
                value={value}
                className={`w-[320px] h-[48px] border border-yellow bg-neutral-700 p-4 mx-4 rounded-[10px] 
                    ${errorMessage ? 'border-red-500' : ''} ${value ? 'pt-5' : ''}`}
                {...props}
            />
            {errorMessage && <p className="text-red text-sm py-2">{errorMessage}</p>}
        </div>
    );
};

export default CustomInput;
