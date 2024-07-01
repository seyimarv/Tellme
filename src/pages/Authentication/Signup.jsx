import Input from "../../components/input";
import AuthFormWrapper from "./AuthFormWrapper";
import Button from "../../components/button";

const Signup = () => {
  return (
    <AuthFormWrapper title="Start for free" redirect="login">
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button className="w-full">Signup</Button>
    </AuthFormWrapper>
  );
};

export default Signup;
