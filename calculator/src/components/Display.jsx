const Display = ({ total, num2, error }) => {
  //For truncate the number
  const truncateNumber = (number) => {
    if (number.length > 10) return number.substring(0, 10) + '...';
    return number;
  };

  return (
    <div className="display">
      <p className="display-result">{error || truncateNumber(num2 || total)}</p>
    </div>
  );
};

export default Display;
