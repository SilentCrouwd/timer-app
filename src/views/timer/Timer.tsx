import Button from "../../components/button/Button";
import Display from "../../components/display/Display";
import InputField from "../../components/inputField/InputField";

function Timer() {
  return (
    <div className="timer__container">
      <Display
        displayName="timer__headline"
        displayValue={"Zeit festlegen: "}
      />
      <InputField />
      <Display displayName="timer__time-left" displayValue={"Time left"} />
      <Display displayName="timer__time-display" displayValue={"00:00 "} />
      <div className="timer__button-container">
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default Timer;
