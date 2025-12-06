import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import CommonButton from "../../components/common/CommonButton";
import { authLogo } from "../../assets/images";
import { Link } from "react-router-dom";

interface RegisterForm {
  firstName: string;
  email: string;
  password: string;
  terms: boolean;
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();


  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white sm:px-4">
      <div className="w-full max-w-md flex flex-col items-center sm:border border-Primary p-4 sm:p-8 rounded-2xl">
        {/* LOGO */}
     
        <img  src={authLogo} alt="Logo" className="w-20 h-20 object-contain mb-6" />
   

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-center">
         Create New Account
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-6">
      Enter your details to sing up
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* FIRST NAME */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              {...register("firstName", { required: true })}
              className="mt-1 w-full border rounded-lg px-4 py-2 outline-none"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                First name is required.
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-1 w-full border rounded-lg px-4 py-2 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required.</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true, minLength: 8 })}
                className="w-full border rounded-lg px-4 py-2 outline-none"
                placeholder="********"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  Password is required and must be at least 8 characters.
                </p>
              )}
            </div>

          </div>

          {/* REGISTER BUTTON */}
<CommonButton className="
  w-full flex items-center justify-center 
  bg-Primary text-white rounded-lg py-2 font-medium mt-4
  transition-transform duration-300 ease-out
  hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xl
">            Register
          </CommonButton>

          {/* OR WITH */}
          <div className="flex items-center mt-3 mb-3">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">Or Register With</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* GOOGLE BUTTON */}
          <CommonButton
            as="a"
            href="https://google.com"
            target="_blank"
            className="w-full flex items-center justify-center gap-3 border rounded-lg py-2 bg-gray-100 hover:bg-gray-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </CommonButton>

          {/* LOGIN */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/auth/sign-in" className="text-Primary cursor-pointer">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}