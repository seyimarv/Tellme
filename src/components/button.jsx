import CircularLoader from "./Loader";

/* eslint-disable react/prop-types */
const Button = ({
  children,
  onClick,
  className,
  type = "button",
  isLoading,
  variant = "filled",
}) => {
  const baseClasses = "px-4 py-2 rounded-md text-primary";
  const filledClasses = "bg-button";
  const outlineClasses = "border border-button bg-transparent";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${
        variant === "outline" ? outlineClasses : filledClasses
      } ${className}`}
      disabled={isLoading}
    >
      <span className="flex items-center justify-center">
        <span>{children}</span>
        {isLoading && (
          <span className="ml-2">
            <CircularLoader />
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;
