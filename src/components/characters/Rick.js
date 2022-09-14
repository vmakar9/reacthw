export default function Rick(props){
let{item:morty}= props;
return(<div>
        <h1>{morty.id}</h1>
        <h2>{morty.name}</h2>
        <h3>{morty.status}</h3>
        <h4>{morty.species}</h4>
        <h5>{morty.gender}</h5>
        <img src={morty.image} alt={"image"}/>
    </div>
    )
}