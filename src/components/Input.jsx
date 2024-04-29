// eslint-disable-next-line react/prop-types
function Input({ id, label, type, textarea = false }) {
  return (
    <div className="relative flex w-full">
      {textarea === false ? (
        <input
          name={id}
          id={id}
          type={type}
          placeholder=" "
          className="bg-primary-100 peer w-full rounded-md border-2 border-gray-400 p-2.5"
        />
      ) : (
        <textarea
          rows="3"
          className="bg-primary-100 peer w-full rounded-md border-2 border-gray-400 p-2.5"
          placeholder=""
        ></textarea>
      )}
      <label
        htmlFor={id}
        className="peer-focus:bg-primary-100 peer-[:not(:placeholder-shown)]:bg-primary-100 absolute p-2.5 pl-5 transition ease-in-out peer-focus:-top-1 peer-focus:left-2 peer-focus:-translate-y-3.5  peer-focus:scale-90 peer-focus:p-1 peer-focus:transition peer-focus:duration-500 peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:p-1 peer-[:not(:placeholder-shown)]:transition peer-[:not(:placeholder-shown)]:duration-500"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
