import { forwardRef, useImperativeHandle, useRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Icon?: React.ElementType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = " ", onClick, children, Icon },
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current);

    return (
      <button
        className={` flex items-center justify-center p-3  hover:bg-gray-200 md:justify-start md:p-4 ${className} `}
        ref={buttonRef}
        onClick={onClick}
      >
        <span>{Icon && <Icon className="mr-4 " size={23} />}</span>
        <span className="hidden md:block">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
