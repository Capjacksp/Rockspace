import React,{useEffect} from 'react';
import { getDatabase, ref, set } from "firebase/database";
import {db} from '../firebase/firebase.config'
import data from '../../data.json'
export default function Test(){
    var t;
    useEffect(()=>{
        db.ref(``).put(data).then((x)=>console.log(x)).catch((e)=>console.log(e));


    },[])

    return(
        <div>
            {t}

        </div>
    );
}