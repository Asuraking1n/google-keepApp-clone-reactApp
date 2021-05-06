import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./index.css";
import { useScrollTrigger } from "@material-ui/core";
const Createnote = (props) => {
    const [note, setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent=(event)=>{
        const{name,value}=event.target
        setNote((oldData)=>{
            return{...oldData,
            [name]:value,
            };
        });
    };
const addEvent=(event)=>{
    props.passnote(note);
    setNote({
        title:'',
        content:'',
    });
};

    return (<>
        <div className="main_note">
            <form>
                <input type="text" value={note.title} name="title" onChange={InputEvent} placeholder="Title" autoComplete="off"></input>
                <textarea row='' column='' value={note.content} name="content" onChange={InputEvent} placeholder="Write a note" ></textarea>
                <Button onClick={addEvent}><AddIcon className="plus_sign"></AddIcon></Button>
            </form>
        </div>
    </>);
};

export default Createnote;