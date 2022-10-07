import css from "./Post.module.css"

export default function Post({post}){
    const {id,title,body}=post
    return(<div>
        <div className={css.Info}>
        <h3 className={css.h}>id : {id}</h3>
        <h3 className={css.h}>tile : {title}</h3>
        <h3 className={css.h}>body : {body} </h3>
        </div>
    </div>)
}