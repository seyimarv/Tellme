import GoogleIcon from "../../assets/google";
import Divider from "../../components/Divider";
import Button from "../../components/button";
import { useGoogleSignInMutation } from "../../redux/query/apiSlice";

const AuthFormWrapper = ({
  title,
  children,
  onGoogleSignIn,
  redirect = "Sign up",
  onSubmit,
}) => {
  const [googleSignIn, { isLoading, error }] = useGoogleSignInMutation();
  return (
    <div className="container max-w-sm flex flex-col gap-3 text-primary h-full">
      <form
        className="flex flex-col gap-5 mt-4 h-[80%] justify-center"
        onSubmit={onSubmit}
      >
        <h4 className="text-2xl mb-2 text-center">{title}</h4>
        {children}
        <div className="flex items-center gap-3 py-2">
          <Divider /> <p className="text-dark">Or continue with</p> <Divider />
        </div>
        <Button
          className="w-full bg-tertiary flex gap-1 justify-center items-center"
          onClick={googleSignIn}
          isLoading={isLoading}
        >
          <GoogleIcon />
          <span>Log in</span>
        </Button>
      </form>
      <div className="m-auto">
        <p className="text-dark">
          Don't have an account? <a className="text-primary pl-1">{redirect}</a>
        </p>
      </div>
    </div>
  );
};

export default AuthFormWrapper;
