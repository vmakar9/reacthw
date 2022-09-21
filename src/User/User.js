import css from "./User.module.css"

export default function User({user}){
      const {id,name,username,email} = user;
      return(<div className={css.User}>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>email : {email}</div>
      </div>)
}