const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  rounded,
  width,
}) => {
  return (
    <button
      className={`flex  justify-center items-center gap-2 px-7 py-4 border forn-montserrat text-lg leading-none
     
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}  ${rounded}`
          : "bg-coral-red rounded-full text-white"
      }
      ${width && `${width}`}
  `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRightIcon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
