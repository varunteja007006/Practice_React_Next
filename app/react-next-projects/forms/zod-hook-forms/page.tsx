"use client";
import { useForm, SubmitHandler } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// zod can also be used in the server side validation

type Inputs = {
  username: string;
  password: string;
  confirmPassword: string;
};
// using zod
// const signUpSchema = z
//   .object({
//     username: z.string(),
//     password: z.string().min(10, "Password should have minimum length of 10"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password !== data.confirmPassword, {
//     message: "Passwords must match",
//     path: ["confirmPassword"],
//   });

// type signUpSchemaType = z.infer<typeof signUpSchema>;

function Main() {
  // using zod
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors, isSubmitting },
  //     reset,
  //     getValues,
  //   } = useForm<signUpSchemaType>({
  //     resolver: zodResolver(signUpSchema),
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const resp = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("All okay");
      }, 2000);
    });
    if (resp) {
      console.log(resp);
    }
    console.log(data);
    reset();
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col flex-wrap gap-3"
      >
        <label className="form-control">
          <div className="label">
            <span className="label-text text-black dark:text-white">
              Username
            </span>
          </div>
          <input
            className="input text-white"
            placeholder="Enter username"
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <span className="my-2 font-bold text-red-500">{`${errors.username.message}`}</span>
          )}
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-black dark:text-white">
              Password
            </span>
          </div>
          <input
            className="input text-white"
            placeholder="Enter password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password must have minimum length of 10",
              },
            })}
          />
          {errors.password && (
            <span className="my-2 font-bold text-red-500">{`${errors.password.message}`}</span>
          )}
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-black dark:text-white">
              Confirm Password
            </span>
          </div>
          <input
            className="input text-white"
            placeholder="Re-enter password"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="my-2 font-bold text-red-500">{`${errors.confirmPassword.message}`}</span>
          )}
        </label>

        {isSubmitting ? (
          <button className="yellow-btn" disabled={isSubmitting}>
            <span className="loading loading-spinner text-warning"></span>
          </button>
        ) : (
          <input className="yellow-btn" type="submit" disabled={isSubmitting} />
        )}
      </form>
    </div>
  );
}

export default Main;
