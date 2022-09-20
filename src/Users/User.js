
export default function User(props) {

    let {item: user,postofuser} = props;

    return (<div>
        <h3>{user.id}  {user.name}</h3>
        <button onClick={()=>{
            postofuser(user.id);
        } }>posts </button>
    </div>)
}