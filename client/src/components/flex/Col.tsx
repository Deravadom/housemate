import type { PropsWithChildren } from "react";

type Props = {
  className?: string
}

const Col = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div className={`flex flex-col ${className || ''}`}>
      {children}
    </div>
  );
};

export default Col;