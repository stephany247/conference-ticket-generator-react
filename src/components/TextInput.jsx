import React from "react";

const TextInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  infoIcon,
  error
}) => {
  return (
    <div className="flex flex-col text-xl">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-2 w-full h-10 bg-neutral-0 text-neutral-0 bg-opacity-10 hover:bg-opacity-15 transition duration-150 ease-in-out rounded-lg border ${error ? 'border-red-400' : 'border-neutral-700'} p-3 focus:outline focus:outline-inset-2 focus:outline-neutral-200 focus:ring-2 ring-neutral-900 ring-inset`}
        autoComplete="on"
      />
      {error && (
        <div className="flex items-center text-red-400 text-xs gap-2 mt-1">
          <img src={infoIcon} alt="info icon" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
