import css from "./User.module.css"

export default function User({user}){
    const {id,name,username,email}=user;
    return(<div>
        <div className={css.Info}>
        <h3 className={css.h}>id : {id}</h3>
        <h3 className={css.h}>name : {name}</h3>
        <h3 className={css.h}>username : {username}</h3>
        <h3 className={css.h}>email : {email}</h3>
    </div>
    </div>)
}