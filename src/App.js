import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import Createnote from "./Createnote";
import Note from "./Note";
function App() {
  const [additem,setaddItem]=useState([]);
  const addnote =(note)=>{
    setaddItem((olddata)=>{
      return [...olddata,note]
    })
  };
const onDelete=(id)=>{
  setaddItem((olddata)=>
  olddata.filter((currentdata,indx)=>{
    return indx !==id;
  })
    
)
}

  return (
    <>
    <Header/>
    <Createnote passnote={addnote}/>
 {   additem.map((data,index) => { 
      return(
        <Note key={index}
          id={index}
          title={data.title}
          content={data.content}
          deleteItem={onDelete}
        />
      );
    })}
    <Footer/>
    
    </>
  );
}

export default App;
