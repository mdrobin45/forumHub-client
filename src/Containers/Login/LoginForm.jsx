import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Checkbox, Input, InputGroup } from "rsuite";
import AuthFormFooter from "../../Components/FormElements/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../Components/FormElements/AuthFormHeader/AuthFormHeader";
import GoogleLogin from "../../Components/FormElements/SocialLogin/GoogleLogin";
import SubmitButton from "../../Components/FormElements/SubmitButton";
import useRegister from "../../Hooks/useRegister";

const LoginForm = () => {
   const { visible, setVisible, register, handleSubmit, onSubmit, errors } =
      useRegister();
   return (
      <div className="mx-auto w-[26rem] border rounded-md shadow-md">
         <AuthFormHeader heading="Sign In" />
         <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6">
            <div className="my-3">
               <label htmlFor="email">Email</label>
               <Input
                  className="mt-1"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                     required: "This field is required",
                     pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                     },
                  })}
               />
               {errors.email ? (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
               ) : (
                  ""
               )}
            </div>

            <div className="my-3">
               <label htmlFor="password">Password</label>
               <InputGroup className="mt-1" inside>
                  <Input
                     placeholder="Enter password"
                     type={visible ? "text" : "password"}
                     {...register("password", {
                        required: "This field is required",
                        pattern: {
                           value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~-]).{7,}$/,
                           message:
                              "Password must be at least 6 characters long and include at least one uppercase and one special character",
                        },
                     })}
                  />

                  <InputGroup.Button
                     onClick={() => {
                        setVisible(!visible);
                     }}>
                     {visible ? (
                        <FaEye className="text-xl" />
                     ) : (
                        <FaEyeSlash className="text-xl" />
                     )}
                  </InputGroup.Button>
               </InputGroup>
               {errors.password ? (
                  <p className="text-sm text-red-500">
                     {errors.password.message}
                  </p>
               ) : (
                  ""
               )}
            </div>

            <div className="inline-flex items-center pb-2">
               <Checkbox {...register("checkbox")}>Remember Me</Checkbox>
            </div>
            <SubmitButton btnText="Sign In" />
            <GoogleLogin />
         </form>
         <AuthFormFooter loginPage={true} />
      </div>
   );
};

export default LoginForm;
