export default function Cat({deleteCat,cat}){
    return(<div>
        {cat.name}
        <button onClick={()=>deleteCat(cat.id)}>Delete Cat</button>
    </div>)

}