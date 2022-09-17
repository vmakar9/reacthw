export default function Fly(props){
    let {item:flights} = props;
    return(<div>
        <h3>{flights.mission_name}</h3>
        <h4>{flights.launch_year}</h4>
        <img src= {flights.links.mission_patch_small} alt="icon"/>
    </div>)
}