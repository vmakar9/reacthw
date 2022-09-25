export default function Todos({tod}){
    return(<div>
    <div>
    <h3>{tod.id}</h3>
    <h3>{tod.title}</h3>
        <h3>{tod.completed}</h3>
        </div>
    </div>)
}