
import { useState } from "react";
import Navbar from "./navbar";

// Sort import
import Bogo from "./sort/Bogo";
import Bubble from "./sort/Bubble";
import Insertion from "./sort/Insertion";
import Merge from "./sort/Merge";
import Quick from "./sort/Quick";

const FunctionMap  :{[key:string]:JSX.Element} = {
  'bubble': <Bubble></Bubble>,
  'merge': <Merge></Merge>,
  'insertion':<Insertion></Insertion>,
  'bogo': <Bogo></Bogo>,
  'quick': <Quick></Quick>,
};

export default function (){
  const [Algo, setAlgo] = useState("insertion");
  let [number,setNumber] = useState(20);
  let [speed,setSpeed] = useState(20);
  <Navbar setAlgo={setAlgo} />
  return <>
    {FunctionMap[Algo]}
    <form>
      <label>Number of elements</label><br/>
      <input type="range" value={number} onChange={e=>setNumber(e.target.valueAsNumber)} min={10} max={100} />
      <label>{number}</label>
    </form>
    <form>
      <label>Speed</label><br/>
      <input type="range" value={speed} onChange={e=>setNumber(e.target.valueAsNumber)} min={10} max={100} />
      <label>{speed}</label>
    </form>
  </>
}
