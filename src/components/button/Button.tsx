import "./Button.css";

interface ButtonProps {
  buttonName: string;
  buttonOnclick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonValue: string;
}
function Button({ buttonName, buttonOnclick, buttonValue }: ButtonProps) {
  return (
    <button className={buttonName} onClick={buttonOnclick}>
      {buttonValue}
    </button>
  );
}

export default Button;
