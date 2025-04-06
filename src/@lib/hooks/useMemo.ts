 
import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  const valueRef = useRef<T | undefined>(undefined);
  const depsRef = useRef<DependencyList | undefined>(undefined);

  // deps가 없거나 변경된 경우 factory 실행
  if (!depsRef.current || !_equals(_deps, depsRef.current)) {
    valueRef.current = factory();
    depsRef.current = _deps;
  }

  return valueRef.current as T;
}
