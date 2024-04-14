// eslint-disable-next-line react/prop-types
function Input({ id, label, type }) {
  return (
    <div className="relative flex">
      <input
        name={id}
        id={id}
        type={type}
        placeholder=" "
        className="w-80 bg-[#f4f5ff] p-2.5 rounded-md border-2 border-gray-400 peer"
      />
      <label
        htmlFor={id}
        className="absolute p-2.5 pl-5 transition ease-in-out peer-focus:transition peer-focus:p-1 peer-focus:-top-1 peer-focus:left-2 peer-focus:scale-90  peer-focus:duration-500 peer-focus:-translate-y-3.5 peer-focus:bg-[#f4f5ff] peer-[:not(:placeholder-shown)]:p-1 peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:transition peer-[:not(:placeholder-shown)]:duration-500 peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:bg-[#f4f5ff]"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
