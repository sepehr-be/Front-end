import { User } from "@/app/login/page";
import api from "@/helper/callApi";


export async function Login(data : User) {
    const res = await api.post("users/login",data)
    return res

}