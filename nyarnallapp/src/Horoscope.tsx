import './TextBox';
import TextBox from './TextBox';
import axios from 'axios';
import React, { useState } from 'react';

// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
//
import "react-awesome-button/dist/styles.css";

type Horoscope = {
    horoscope: string[]
} | null

function Horoscope() {
    const [sun, setSun] =  useState<string>("")
    const [moon, setMoon] = useState<string>("")
    const [rising, setRising] = useState<string>("")
    const [horoscope, setHoroscope] = useState<Horoscope>(null)

    async function reqHoroscope(sun: string, moon: string, rising: string): Promise<void> {
        type reqBody = {
            sun: string,
            moon: string,
            rising: string
        }

        const body: reqBody = { sun, moon, rising }

        try {
            const res = await axios.post("http://localhost:4567/horoscope", body)
            setHoroscope(res.data)
            console.log(res.data);
        } catch (e) {
            console.log(e)
        }


    }
    
    return <div>
        <TextBox label={"Sun Sign"} name="Sun" change={setSun}></TextBox>
        <TextBox label={"Moon Sign"} name="Moon" change={setMoon}></TextBox>
        <TextBox label={"Rising Sign"} name="Rising" change={setRising}></TextBox>
        <AwesomeButton 
            type="primary"
            onPress = { () => {
                reqHoroscope(sun, moon, rising)
            }}>
            Submit
        </AwesomeButton>
        <div id="horoscope">
            { horoscope == null ? 
                "":
                horoscope.horoscope.map((attr: string) => <p>{attr}</p>)}
        </div>
    </div>
}

export default Horoscope;