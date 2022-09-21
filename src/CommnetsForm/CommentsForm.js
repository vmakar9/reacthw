import {useForm} from "react-hook-form";

export default function CommentsForm(){
    const{register,handleSubmit,reset,formState:{error,isValid},setValue} = useForm()
    const submit=(comment)=>{
        console.log(comment);
    }
    return(<form onSubmit={handleSubmit(submit)}>
        <input type={"number"} placeholder={''} {...register("postID")}/>
        <input type={"number"} placeholder={''} {...register("id")}/>
        <input type={"text"} placeholder={''} {...register("name")}/>
        <input type={"text"} placeholder={''} {...register("email")}/>
        <input type={"text"} placeholder={''} {...register("body")}/>
        <button>Save User</button>
    </form>)
}