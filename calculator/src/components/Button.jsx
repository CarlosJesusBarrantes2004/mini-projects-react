const Button = ({ clickHandle, sign }) => {
  const handleClick = () => clickHandle(sign);

  return (
    <button className="button" onClick={handleClick}>
      {sign}
    </button>
  );
};

export default Button;
