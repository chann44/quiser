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
    { className, isLoading, onClick, children, Icon, ...buttonProps },
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current);

    return (
      <button className="" ref={buttonRef} onClick={onClick}>
        <span>{Icon && <Icon className="" />}</span>
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
