import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getRules, rules } from "../../utils/rule";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();
  const rules = getRules(getValues);

  const onSubmit = handleSubmit((data) => {
    //
  });
  console.log("error", errors);
  return (
    <div className="bg-orange">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="p-10 rounded bg-white shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="text-2xl">Register</div>
              <div className="mt-8">
                <input
                  type="text"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus: shadow-sm "
                  placeholder="Email"
                  {...register("email", rules.email)}
                />
                <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">
                  {errors.email?.message}
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus: shadow-sm "
                  placeholder="Password"
                  {...register("password", rules.password)}
                  autoComplete="on"
                />
                <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
                  {errors.password?.message}
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus: shadow-sm "
                  placeholder="Confirm password"
                  autoComplete="on"
                  {...register("confirm_password", {
                    ...rules.confirm_password,
                  })}
                />
                <div className="mt-1 text-red-600 min-h-[1rem] text-sm">
                  {errors.confirm_password?.message}
                </div>
              </div>
              <div>
                <button className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white  text-sm hover:bg-red-600">
                  Register
                </button>
              </div>
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center">
                  <span className="text-slate-400">Have accounts? </span>
                  <Link className="text-red-400 ml-2" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
