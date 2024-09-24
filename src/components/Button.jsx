const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`
      flex py-4 px-7 items-center text-lg  leading-none justify-center
     hover:shadow-md hover:shadow-violet-300 transition rounded-full
     ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-violet-700 rounded-full text-white border-violet-700 ${fullWidth && 'w-full'}'"}`}>
     
     

      {label}

      {iconURL && <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded h-5 w-5"
      />}
    </button>
  )
}

export default Button