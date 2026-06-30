import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Display from "../../components/display/Display";
import InputField from "../../components/inputField/InputField";
import "./Timer.css";

// Timer Starten Fn
//UseEffect das Reagert wenn ich start Klicke maybe
// use state
// maybe custom Hook

function useGetInput() {
  const [value, setValue] = useState<number>(0);

  function handleOnChangeCallback(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value));
  }
  return { value, handleOnChangeCallback };
}

function useTimerHook() {
  const [handleTime, setHandleTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  function timerFunction(startTime: number) {
    setHandleTime(startTime);
    setIsActive(true);
  }
  useEffect(() => {
    if (isActive === true) {
      const timerId = setInterval(() => {
        setHandleTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerId);
            setIsActive(false);
            return 0;
          }
          return Number((prevTime - 0.01).toFixed(3));
        });
      }, 10);
      return () => {
        clearInterval(timerId);
      };
    }
  }, [isActive]);
  return { handleTime, timerFunction };
}

function Timer() {
  const { value, handleOnChangeCallback } = useGetInput();
  const { handleTime, timerFunction } = useTimerHook();

  return (
    <div className="timer__container">
      <Display
        displayName="timer__headline"
        displayValue={"Zeit festlegen: "}
      />
      <InputField
        inputName="timer__input"
        inputOnchange={handleOnChangeCallback}
        inputPlaceholder="0"
        inputType="Number"
      />
      <Display displayName="timer__time-left" displayValue={"Time left"} />
      <Display
        displayName="timer__time-display"
        displayValue={handleTime.toFixed(3)}
      />
      <div className="timer__button-container">
        <Button
          buttonName="btn btn__start"
          buttonValue="Start"
          buttonOnclick={() => timerFunction(value)}
        ></Button>
        <Button buttonName="btn btn__stop" buttonValue="Stop"></Button>
        <Button buttonName="btn btn__reset" buttonValue="Reset"></Button>
      </div>
    </div>
  );
}

export default Timer;
