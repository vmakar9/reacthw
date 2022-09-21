import {useForm} from "react-hook-form";

export default function UserForm(){
   const{register,handleSubmit,reset,formState:{errors,isValid},setValue} =useForm()
    const submit =(user)=>{
      console.log(user)
    }
return(<form onSubmit={handleSubmit(submit)}>
    <input type={"number"} placeholder={''} {...register('id')}/>
    <input type={"text"} placeholder={''} {...register('name')}/>
    <input type={"text"} placeholder={''} {...register('username')}/>
    <input type={"text"} placeholder={''} {...register('email')}/>
    <button>Save User</button>
</form>)
}