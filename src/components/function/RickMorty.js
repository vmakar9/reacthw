import Rick from "../../components/characters/Rick"
import {useState} from "react";
export default function RickAndMorty(){
    let[morty,setMorty]=useState([])
    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setMorty(value.results.splice(0,6));
        })

    return (
        <div>
            {morty.map((morty) =>(<Rick item ={morty} key={morty.id}/>))}
        </div>
    );
}