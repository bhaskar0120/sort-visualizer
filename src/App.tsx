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
  <Navbar setAlgo={setAlgo} />
  return <>
    {FunctionMap[Algo]}
  </>
}
