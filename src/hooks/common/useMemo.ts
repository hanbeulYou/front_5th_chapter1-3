import { DependencyList } from "react";
import { shallowEquals } from "../../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals
): T {
  const valueRef = useRef<T | undefined>(undefined);
  const depsRef = useRef<DependencyList | undefined>(undefined);

  if (!depsRef.current || !_equals(_deps, depsRef.current)) {
    valueRef.current = factory();
    depsRef.current = _deps;
  }

  return valueRef.current as T;
}
