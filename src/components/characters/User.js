
export default function User(props){
    let{item:user,show} = props;
    return(<div>
        {user.id} - {user.name}
        <button onClick={()=>{
            show(user)
        }
    }
        > more info </button>
    </div>)
}