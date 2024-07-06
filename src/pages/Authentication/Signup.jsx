import Input from "../../components/input";
import AuthFormWrapper from "./AuthFormWrapper";
import Button from "../../components/button";
import { useFormik } from "formik";
import { SignUpValidation } from "../../utils/validation";
import { useSignupMutation } from "../../redux/query/apiSlice";

const Signup = () => {
  const [signup, { isLoading, error }] = useSignupMutation();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpValidation,
    onSubmit: async (values, { setErrors }) => {
      const { email, password, username } = values;
      const result = await signup({
        email,
        password,
        additionalInfo: { username },
      });
    },
  });

  return (
    <AuthFormWrapper
      title="Start for free"
      redirect="login"
      onSubmit={formik.handleSubmit}
    >
      <Input
        name="username"
        placeholder="Name"
        {...formik.getFieldProps("username")}
        error={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : ""
        }
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        {...formik.getFieldProps("email")}
        error={
          (formik.touched.email && formik.errors.email
            ? formik.errors.email
            : "") ||
          (error?.error === "Firebase: Error (auth/email-already-in-use)" &&
            "email already in use")
        }
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        {...formik.getFieldProps("password")}
        error={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ""
        }
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        {...formik.getFieldProps("confirmPassword")}
        error={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? formik.errors.confirmPassword
            : ""
        }
      />
      <Button className="w-full" type="submit" isLoading={isLoading}>
        Signup
      </Button>
    </AuthFormWrapper>
  );
};

export default Signup;
