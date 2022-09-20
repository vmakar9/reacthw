export default function Post(props){
    let{item:post}=props;
    return(<div>
        <p> {post.id}
            {post.body}
            {post.title}</p>
    </div>)
}