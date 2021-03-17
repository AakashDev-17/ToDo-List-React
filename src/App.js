import React, { useState } from 'react'

const App = () => {

   const [inputItem, setInputItem] = useState("");

   const [itemList, setItemList] = useState([]);

   const inputEvent = (e) => {
      setInputItem(e.target.value);
   }

   const addItem = (e) => {
      e.preventDefault();
      const spaceRemoved = inputItem.replace(/\s/g, "").length;
      if(spaceRemoved > 0)
         inputItem!=="" && setItemList([...itemList, inputItem]);
      setInputItem("");
   }

   const onDelete = (i) => {
      // eslint-disable-next-line
      setItemList(itemList.filter((item, Index) => {if(Index !== i) return item }));
   }

   return (
      <>
         <div className="main_div">
            <div className="center_div">
               <br />
               <h1> ToDo List </h1>
               <br />
               <form className="addBox" onSubmit={addItem}>
                  <input type="text" placeholder="Add a Item" value={inputItem} onChange={inputEvent} />
                  <button type="submit"> + </button>
               </form>
               <ol>
                  {itemList.map((item, Index) => (<li key={Index}> <span className="deleteBtn" onClick={() => onDelete(Index)}> &times; </span> {item} </li>))}
               </ol>
            </div>
         </div>
      </>
   )
}

export default App
