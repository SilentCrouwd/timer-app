import Button from "../../components/button/Button";
import Display from "../../components/display/Display";
import InputField from "../../components/inputField/InputField";

function Timer() {
  return (
    <div className="timer__container">
      <Display />
      <InputField />
      <Display />
      <Display />
      <div className="timer__button-container">
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default Timer;
