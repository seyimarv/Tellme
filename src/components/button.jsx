/* eslint-disable react/prop-types */
const Button = ({ children, onClick, className, type = "button", isLoading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 text-primary bg-button rounded-md ${className}`}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
