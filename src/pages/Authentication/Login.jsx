import React from "react";
import Input from "../../components/input";
import AuthFormWrapper from "./AuthFormWrapper";
import Button from "../../components/button";
import { useFormik } from "formik";
import { loginValidation } from "../../utils/validation";
import { useLoginMutation } from "../../redux/query/apiSlice";

const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values, { setErrors }) => {
      const { email, password } = values;
      try {
        const result = await login({ email, password });
        console.log(result?.data);
      } catch (e) {
        if (e?.error) {
          setErrors({ email: "Invalid email or password" });
        }
      }
    },
  });

  return (
    <AuthFormWrapper
      title="Login to your account"
      onSubmit={formik.handleSubmit}
    >
      <Input
        name="email"
        type="email"
        placeholder="Email"
        {...formik.getFieldProps("email")}
        error={
          (formik.touched.email && formik.errors.email
            ? formik.errors.email
            : "") ||
          (error?.error === "Firebase: Error (auth/user-not-found)." &&
            "Email does not exist")
        }
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        {...formik.getFieldProps("password")}
        error={
          (formik.touched.password && formik.errors.password
            ? formik.errors.password
            : "") ||
          (error?.error === "Firebase: Error (auth/wrong-password)." &&
            "Wrong password")
        }
      />
      <p className="text-dark text-right">Forgot your Password?</p>
      <Button className="w-full" type="submit" isLoading={isLoading}>
        Login
      </Button>
    </AuthFormWrapper>
  );
};

export default Login;
