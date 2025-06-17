import { type PropsWithChildren } from "react";
import NoItems from "./NoItems";

type Props<T> = {
  items: T[] | undefined | null
}
const HasItems = <T,>({ items, children }: PropsWithChildren<Props<T>>) => {
  if (!items?.length) {
    return <NoItems />
  }

  return <>
    {children}
  </>
}

export default HasItems;