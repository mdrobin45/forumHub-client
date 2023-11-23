import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Checkbox, Input, InputGroup } from "rsuite";
import AuthFormFooter from "../../Components/FormElements/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../Components/FormElements/AuthFormHeader/AuthFormHeader";
import GoogleLogin from "../../Components/FormElements/SocialLogin/GoogleLogin";
import SubmitButton from "../../Components/FormElements/SubmitButton";
import useRegister from "../../Hooks/useRegister";

const RegisterForm = () => {
   const { visible, setVisible, register, handleSubmit, onSubmit, errors } =
      useRegister();
   return (
      <div className="mx-auto w-[26rem] border rounded-md shadow-md">
         <AuthFormHeader heading="Sign Up" />
         <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6">
            <div className="my-3">
               <label htmlFor="name">Name</label>
               <Input
                  className="mt-1"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                     required: "This field is required",
                  })}
               />
               {errors.name ? (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
               ) : (
                  " "
               )}
            </div>
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
               <label>Upload photo</label>
               <input
                  {...register("photo", { required: "Photo is required" })}
                  className="mt-1 border w-full rounded-md p-3"
                  type="file"
               />
               {errors.photo ? (
                  <p className="text-sm text-red-500">{errors.photo.message}</p>
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
               <Checkbox
                  {...register("checkbox", {
                     required: "Please accept our term and conditions",
                  })}>
                  I agreed to{" "}
                  <Link className="text-primary underline" to="/">
                     Term and Conditions
                  </Link>
               </Checkbox>
            </div>
            {errors.checkbox ? (
               <p className="text-sm pb-3 text-red-500">
                  {errors.checkbox.message}
               </p>
            ) : (
               ""
            )}
            <SubmitButton btnText="Sign Up" />
            <GoogleLogin />
         </form>
         <AuthFormFooter registerPage={true} />
      </div>
   );
};

export default RegisterForm;
