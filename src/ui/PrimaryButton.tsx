import { forwardRef, useImperativeHandle, useRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = " ", onClick, children },
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current);

    return (
      <button
        className={` rounded-lg transition-all duration-200 ease-in active:scale-95  ${className} `}
        ref={buttonRef}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";
export default PrimaryButton;
