import css from "./Commnet.module.css"
export default function Comment({comment}){
    const {postId,id,name,email,body} = comment;
    return(<div className={css.Comment}>
        <div>postId : {postId}</div>
        <div>id : {id}</div>
        <div>name : {name}</div>
        <div>email : {email}</div>
        <div>body : {body}</div>
    </div>)
}