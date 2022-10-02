export default function Dog({deleteDog,dog}){
    return(<div>
        {dog.name}
        <button onClick={()=>deleteDog(dog.id)}>Delete Dog</button>
    </div>)
}