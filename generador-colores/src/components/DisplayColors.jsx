import SingleColor from "./SingleColor";

const DisplayColors = ({ list }) => {
  return (
    <div>
      {list.map((color, index) => (
        <SingleColor key={index} color={color}></SingleColor>
      ))}
    </div>
  );
};

export default DisplayColors;
