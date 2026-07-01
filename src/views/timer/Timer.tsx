import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";
import Display from "../../components/display/Display";
import InputField from "../../components/inputField/InputField";
import "./Timer.css";

// Timer Starten Fn
//UseEffect das Reagert wenn ich start Klicke maybe
// use state
// maybe custom Hook

function useGetInput() {
  const [value, setValue] = useState<number | "">(0);

  function handleOnChangeCallback(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value));
  }
  function clearInput() {
    setValue("");
  }
  return { value, handleOnChangeCallback, clearInput };
}

function useTimerHook() {
  const [handleTime, setHandleTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [startValue, setStartValue] = useState<number>(0);
  const intervalId = useRef<number>(-1);
  function clearTimer() {
    pauseTimer();
    setHandleTime(0);
    setStartValue(0);
  }

  function pauseTimer() {
    setIsActive(false);
    clearInterval(intervalId.current);
  }

  function startTimer(startTime: number | undefined) {
    if (startTime) {
      setHandleTime(startTime);
      setIsActive(true);
      setStartValue(startTime);
    }
    if (!startTime && handleTime > 0) {
      setIsActive(true);
    }
  }
  useEffect(() => {
    if (isActive === true) {
      intervalId.current = setInterval(() => {
        setHandleTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId.current);
            setIsActive(false);
            return 0;
          }

          return Number((prevTime - 0.01).toFixed(3));
        });
      }, 10);
      return () => {
        clearInterval(intervalId.current);
      };
    }
  }, [isActive]);
  return { handleTime, startTimer, pauseTimer, clearTimer };
}

function Timer() {
  const { value, handleOnChangeCallback, clearInput } = useGetInput();
  const { handleTime, startTimer, pauseTimer, clearTimer } = useTimerHook();

  return (
    <div className="timer__container">
      <Display
        displayName="timer__headline"
        displayValue={"Zeit festlegen: "}
      />
      <InputField
        inputValue={value}
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
          buttonOnclick={() => {
            startTimer(value === "" ? undefined : value);
            clearInput();
          }}
        ></Button>
        <Button
          buttonName="btn btn__stop"
          buttonValue="Stop"
          buttonOnclick={() => pauseTimer()}
        ></Button>
        <Button
          buttonName="btn btn__reset"
          buttonOnclick={() => clearTimer()}
          buttonValue="Reset"
        ></Button>
      </div>
    </div>
  );
}

export default Timer;
