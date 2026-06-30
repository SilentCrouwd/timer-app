import Button from "../../components/button/Button";
import Display from "../../components/display/Display";
import InputField from "../../components/inputField/InputField";
import "./Timer.css";
function Timer() {
  return (
    <div className="timer__container">
      <Display
        displayName="timer__headline"
        displayValue={"Zeit festlegen: "}
      />
      <InputField
        inputName="timer__input"
        inputPlaceholder="0"
        inputType="Number"
      />
      <Display displayName="timer__time-left" displayValue={"Time left"} />
      <Display displayName="timer__time-display" displayValue={"00:00 "} />
      <div className="timer__button-container">
        <Button buttonName="btn btn__start" buttonValue="Start"></Button>
        <Button buttonName="btn btn__stop" buttonValue="Stop"></Button>
        <Button buttonName="btn btn__reset" buttonValue="Reset"></Button>
      </div>
    </div>
  );
}

export default Timer;
