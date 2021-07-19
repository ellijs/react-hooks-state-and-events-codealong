import React, { useState }from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
      setIsOn((isOn) => !isOn)
    }

    const color = isOn? "red" : "white"

  // function changeText(e) {
  //   (e.target.textContent === "OFF")? e.target.textContent = "ON" : e.target.textContent = "OFF"
  // }

  // return <button onClick = {changeText}>OFF</button>;

  return <button style = {{ background: color }} onClick={handleClick}>{isOn? "On" : "OFF"}</button>;
}

export default Toggle;
