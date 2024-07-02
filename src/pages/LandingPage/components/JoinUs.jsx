import Button from "../../../components/button";

const JoinUs = () => {
  return (
    <div className="py-10 bg-tertiary rounded-xl container h-[300px] flex flex-col items-center justify-center my-40">
      <h4 className="mb-1 text-4xl text-primary">Join other users today</h4>
      <p className="mb-5 text-secondary">Start sharing and reading for free</p>
      <Button>Sign up for free</Button>
    </div>
  );
};

export default JoinUs;
