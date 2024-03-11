import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import { schema, Schema } from "../../utils/rule";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

const registerSchema = schema.pick(["email", "password", "confirm_password"]);

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data);
    },
    (data) => {
      const password = getValues("password");
      console.log(password);
    }
  );

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
              <div className="text-2xl font-semibold">Get’s started.</div>
              <Input
                name="email"
                register={register}
                type="email"
                className="mt-8"
                errorMessage={errors.email?.message}
                placeholder="Email"
                autoComplete="on"
              />
              <Input
                name="password"
                register={register}
                type="password"
                className="mt-2"
                errorMessage={errors.password?.message}
                placeholder="Password"
                autoComplete="on"
              />
              <Input
                name="confirm_password"
                register={register}
                type="password"
                className="mt-2"
                errorMessage={errors.confirm_password?.message}
                placeholder="Confirm Password"
                autoComplete="on"
              />
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
