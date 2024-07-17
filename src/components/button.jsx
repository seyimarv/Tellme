import CircularLoader from "./Loader";

/* eslint-disable react/prop-types */
const Button = ({
  children,
  onClick,
  className,
  type = "button",
  isLoading,
  variant = "filled",
  Icon,
}) => {
  const baseClasses = "px-4 py-2 rounded-md text-primary";
  const filledClasses = "bg-button";
  const outlineClasses = "border border-button bg-transparent";
  const secondaryClasses = "bg-[#0c0c0c] text-white border border-[#515151]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${
        variant === "outline"
          ? outlineClasses
          : variant === "secondary"
          ? secondaryClasses
          : filledClasses
      } ${className}`}
      disabled={isLoading}
    >
      <span className="flex items-center justify-center">
        {Icon && (
          <span className="mr-2">
            <Icon className="text-inherit w-5 h-5" />
          </span>
        )}
        <span className="text-inherit">{children}</span>
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

export const InteractionButton = ({ children, interactions, onClick }) => {
  return (
    <div className="flex items-center gap-1">
      <Button variant="secondary" onClick={onClick} className="text-xl">
        {children}
      </Button>
      {interactions !== undefined && <span>{interactions}</span>}
    </div>
  );
};
