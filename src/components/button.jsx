import clsx from "clsx";
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
  const baseClasses = "px-4 py-2 rounded-md";
  const variantClasses = clsx({
    "bg-button text-primary": variant === "filled",
    "border border-button bg-transparent text-primary": variant === "outline",
    "bg-[#0c0c0c] text-white border border-[#515151]": variant === "secondary",
    "bg-white text-lg text-darker": variant === "tertiary"
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses, className)}
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

export const InteractionButton = ({
  children,
  interactions,
  onClick,
  small,
}) => {
  return (
    <div className={clsx(small && "text-sm", "flex items-center gap-1")}>
      <Button
        variant="secondary"
        onClick={onClick}
        className={clsx(small && "px-[10px] py-2")}
      >
        {children}
      </Button>
      {interactions !== undefined && (
        <span className="text-inherit">{interactions}</span>
      )}
    </div>
  );
};
