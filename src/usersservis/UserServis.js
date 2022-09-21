import {axiosIncrease} from "../useraxios/User.Api.Axios";

import {urls} from "../userlink/UserLink";

const UserServis ={
    getAll:()=>axiosIncrease.get(urls.users),
    create:(user)=>axiosIncrease.post(urls.users,user)
}
const CommentsServis ={
    getAll:()=>axiosIncrease.get(urls.comments),
    create:(comment)=>axiosIncrease.get(urls.comments,comment)
}

export {UserServis, CommentsServis}