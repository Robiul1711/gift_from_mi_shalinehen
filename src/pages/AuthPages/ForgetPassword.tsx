import { useForm } from "react-hook-form";
import CommonButton from "../../components/common/CommonButton";
import { authLogo } from "../../assets/images";

interface SignInForm {
  email: string;
  
}

export default function ForgetPassword() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm<SignInForm>();


  const onSubmit = (data: SignInForm) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white sm:px-4">
      <div className="w-full max-w-md flex flex-col items-center sm:border border-Primary p-4 sm:p-8 rounded-2xl">

        {/* LOGO */}

        <img  src={authLogo} alt="Logo" className="w-20 h-20 object-contain mb-6" />
       

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-center">
      Forgot Password
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-6">
Enter your email address and we’ll send you
password reset instructions.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
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

   
<CommonButton className="
  w-full flex items-center justify-center 
  bg-Primary text-white rounded-lg py-2 font-medium mt-4
  transition-transform duration-300 ease-out
  hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xl
">
  Send Code
</CommonButton>


        </form>
      </div>
    </div>
  );
}