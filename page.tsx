'use client'

import Input from "@/Components/shared/form/input";
import UserLoginToken from "@/helper/auth";
import { Login } from "@/services/user";
import { Form, Formik, } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup"

export interface User {
    username: string,
    password: string,
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required("وارد کردن نام کاربری اجباری میباشد").min(6, "طول نام کاربری حداقل 6 کارکتر میباشد"),
    password: Yup.string().required("وارد کردن رمز عبور اجباری میباشد").min(8, "طول رمز کاربری حداقل 8 کارکتر میباشد")
})

const LoginPage = () => {

    const router = useRouter()

    const subHandler = async (values: User) => {
        try {
            const res = await Login(values)
            UserLoginToken(res?.data?.access_token)
            if (res?.status == 200) {
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }


    }




    return (
        <>
            <div className="p-6 h-full">
                <div className="w-full max-w-md mx-auto my-auto">
                    <div className="flex min-h-full bg-gray-50 flex-1 flex-col border-2 border-gray-300/50 rounded-xl justify-center py-12 ">
                        <div className="sm:mx-auto flex flex-col sm:w-full sm:max-w-md">
                            <img
                                className="mx-auto h-10 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-center text-2xl font-vazir font-bold leading-9 tracking-tight text-gray-900">
                                ورود به حساب کاربری
                            </h2>
                        </div>
                        <Formik validationSchema={validationSchema} onSubmit={subHandler} initialValues={{
                            username: "",
                            password: ""
                        }}>
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                                <div className=" px-6 py-12  sm:rounded-lg sm:px-12">
                                    <Form className="space-y-6">
                                        <div>
                                            <Input
                                                inputClassName="bg-gray-50"
                                                labelClassName="bg-gray-50"
                                                label="نام کاربری"
                                                name="username"
                                                type="username"
                                            />
                                        </div>

                                        <div>
                                            <Input
                                                inputClassName="bg-gray-50"
                                                labelClassName="bg-gray-50"
                                                label="رمز عبور"
                                                name="password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="w-full border-t border-gray-300" />
                                        <div>
                                            <button
                                                type="submit"
                                                className="flex font-vazir w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                ورود
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LoginPage;