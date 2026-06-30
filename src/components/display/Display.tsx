import "./Display.css";
interface DisplayProps {
  displayName: string;
  displayValue: string | number;
}

function Display({ displayName, displayValue }: DisplayProps) {
  return <p className={displayName}>{displayValue}</p>;
}

export default Display;
