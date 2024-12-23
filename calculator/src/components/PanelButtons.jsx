import Button from './Button';

const PanelButtons = ({ clickHandle }) => {
  const handleClick = (sign) => clickHandle(sign);

  return (
    <div className="buttons">
      <Button clickHandle={handleClick} sign={'AC'}></Button>
      <Button clickHandle={handleClick} sign={'+/-'}></Button>
      <Button clickHandle={handleClick} sign={'%'}></Button>
      <Button clickHandle={handleClick} sign={'x'}></Button>
      <Button clickHandle={handleClick} sign={'7'}></Button>
      <Button clickHandle={handleClick} sign={'8'}></Button>
      <Button clickHandle={handleClick} sign={'9'}></Button>
      <Button clickHandle={handleClick} sign={'/'}></Button>
      <Button clickHandle={handleClick} sign={'4'}></Button>
      <Button clickHandle={handleClick} sign={'5'}></Button>
      <Button clickHandle={handleClick} sign={'6'}></Button>
      <Button clickHandle={handleClick} sign={'*'}></Button>
      <Button clickHandle={handleClick} sign={'1'}></Button>
      <Button clickHandle={handleClick} sign={'2'}></Button>
      <Button clickHandle={handleClick} sign={'3'}></Button>
      <Button clickHandle={handleClick} sign={'-'}></Button>
      <Button clickHandle={handleClick} sign={'0'}></Button>
      <Button clickHandle={handleClick} sign={'.'}></Button>
      <Button clickHandle={handleClick} sign={'='}></Button>
      <Button clickHandle={handleClick} sign={'+'}></Button>
    </div>
  );
};

export default PanelButtons;
