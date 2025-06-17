import { type ReactNode } from "react";

type Props<T extends PropertyKey> = {
  expr: T
  cases: Record<T, ReactNode>
}
const CaseWrapper = <T extends PropertyKey>({ expr, cases }: Props<T>) => {
  return <>{cases[expr]}</>
}

export default CaseWrapper;