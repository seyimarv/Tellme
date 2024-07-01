import Input from "../../components/input";
import AuthFormWrapper from "./AuthFormWrapper";
import Button from "../../components/button";

const Login = () => {
  return (
    <AuthFormWrapper title="Login to your account">
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <p className="text-dark text-right">Forgot your Password?</p>
      <Button className="w-full">Login</Button>
    </AuthFormWrapper>
  );
};

export default Login;
