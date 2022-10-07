import css from './Comment.module.css'
export default function Comment({comment}){
    const {id,name,email,body}=comment
    return(<div>
        <div className={css.Info}>
        <h3 className={css.h}> id : {id}</h3>
        <h3 className={css.h}>name : {name}</h3>
        <h3 className={css.h}>email : {email}</h3>
        <h3 className={css.h}>body : {body}</h3>
        </div>
    </div>)
}