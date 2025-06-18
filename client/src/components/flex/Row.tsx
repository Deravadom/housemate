import type { PropsWithChildren } from "react";

type Props = {
  className?: string;
}

const Row = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div className={`flex flex-row ${className || ''}`}>
      {children}
    </div>
  );
};

export default Row;