import { ReactNode } from "react";

type Props<T extends keyof any> = {
  expr: T
  cases: Record<T, ReactNode>
}
const CaseWrapper = <T extends keyof any>({expr, cases}: Props<T>) => {
  return <>{cases[expr]}</>
}

export default CaseWrapper;