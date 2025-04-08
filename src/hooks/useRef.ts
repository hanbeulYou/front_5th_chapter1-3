import { useState } from "react";

export function useRef<T>(initialValue?: T): { current: T | undefined } {
  const [ref] = useState({ current: initialValue });
  return ref;
}
