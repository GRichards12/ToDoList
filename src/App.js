import "./App.css";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ChangeColour from "./components/ChangeColour";
import ChangeFont from "./components/ChangeFont";
// import Checklist from './components/Checklist';
// import Items from './components/Items';
// import Remove from './components/Remove';


const App = () => {
  const [itemsList, setItemList] = useState([]);
  const [itemInput, setItemInput] = useState("");
  // const [check, setCheck] = useState(false);
  // const [i, setI] = useState(0);
  const [font, setFont] = useState(false);
  const [colourScheme, setColourScheme] = useState(false);

  const handleAdd = (x) => {
      x.preventDefault();
      // x.stopImmediatePropagation();
      setItemList([...itemsList, itemInput]);
      setItemInput("");
    };

  const strikeThrough = (text) => {
        text = String(text);
        let newText = text.split('').map((char) => char + '\u0336').join('');
        return newText;
    }


  let items = itemsList.map((item, index) => {
    return (
      <div key={index}>
        <p key={item}>
          {item}
        </p>
        <button onClick={() => {
          let strikeItem = item;
          let clearList = itemsList;
          strikeItem = strikeThrough(strikeItem);
          strikeItem = [strikeItem, " ", <FaCheckCircle key={index} />]
          clearList.splice(index,1);
          clearList.push(strikeItem);
          setItemList(clearList);
        }} >
          Complete!
        </button>
        <button onClick={() => {
          let newList = itemsList;
          newList.splice(index, 1);
          setItemList(newList);
        }}>
          Remove
        </button>
      </div>
    )
  })

  return(
    <div className="App">
      <div className={font ? "dyslexic--font":"regular--font"}>
        <div className={colourScheme ? "darker--theme":"normal--theme"}>
      <header>
        <h1>Add an item to your to do list:</h1>
        <input 
          type="text"
          value={itemInput}
          onChange={(x)=>setItemInput(x.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <ChangeColour setColourScheme = {setColourScheme} colourScheme = {colourScheme} />
        <ChangeFont setFont={setFont} font={font} /> 
      </header>
      <div className="items">
      {items}
      </div></div></div>
    </div>
  )};


  


export default App;

  // let items = itemsList.map((task)=>{
  //   return (
  // <div key={task.key}>
  //   <li>
  //     {task.item}
  //   </li>
  //   <button value={task.check} onClick={()=>{task.check = !task.check}}>
  //     check
  //   </button>
  //   <button onClick = {() =>
  //   removeCheck = true;
  // }>
  //     remove
  //   </button>
  // </div>  
  //   )
  // });
    
  // return(
  //   <div className="app">
  //   <Checklist
  //     itemInput = {itemInput}
  //     setItemInput = {setItemInput}
  //     handleAdd = {handleAdd} />
  //                 <li>
  //               {itemsList.map((item) => (
  //                   <div><h1>{item}</h1>
  //                   <Remove
  //     itemsList = {itemsList}
  //     setItemList = {setItemList}
  //     item = {item}
  //     /></div>))}
  //           </li>


  //   </div>)}