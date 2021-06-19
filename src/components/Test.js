import React, { useState }from 'react'
function Test() {
  const [counter, setCounter] = React.useState(60);
  const [ok,setOk] = useState(true)
  const[text,setText]= useState(0)
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => ok?setCounter(counter - 1):"", 1000);
    return () => clearInterval(timer);
  }, [counter,ok]);

  React.useEffect(() => {
     setText(counter)
  },[counter])

 const onClickHandle =(e) =>{
   e.preventDefault();
   if(ok === true) setOk(false)
   else setOk(true)
   console.log(ok)
 }
  return (
    <div className="App">
      <div>Countdown: {counter}</div>
      <div> text:{text} </div>
      <button onClick={onClickHandle}>ok</button>
    </div>
  );
}

export default Test
