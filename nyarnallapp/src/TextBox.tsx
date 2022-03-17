import { text } from "stream/consumers";
import React, { ChangeEventHandler, Component } from 'react';
import { getValue } from "@testing-library/user-event/dist/utils";

interface input {
    label: string
    change: any
    name: string
}
function TextBox(props:input) {
    return <form>
        <label>{props.label}</label>
        <input 
        type="text"
        id={props.name}
        onChange={
            (e) => props.change(e.target.value)
        }
        >
        </input>
    </form>
}

export default TextBox;