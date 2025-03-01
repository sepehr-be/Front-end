import { MouseEvent } from "react";
import Input from "../shared/form/input";


const Login = () => {

    return (
        <>
            <div className="m-4">
                <div style={{ background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur( 4px )", WebkitBackdropFilter: "blur( 4px )", borderRadius: "10px" }} className="w-full max-w-md mx-auto my-auto">
                    <div className="flex min-h-full flex-1 flex-col justify-center py-12 ">
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

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                            <div className="bg-white px-6 py-12  sm:rounded-lg sm:px-12">
                                <form className="space-y-6" action="#" method="POST">
                                    <div>
                                        <Input
                                            label="ایمیل"
                                            name="email"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            label="رمز عبور"
                                            name="password"
                                            type="password"
                                            id="passwrd"
                                        />
                                    </div>
                                    <div className="w-full border-t border-gray-200" />
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex font-vazir w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            ورود
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Login;






