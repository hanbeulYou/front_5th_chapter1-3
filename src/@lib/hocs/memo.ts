import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useRef } from "../hooks";
import React from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  return function MemoizedComponent(props: P): JSX.Element {
    const prevPropsRef = useRef<P>();
    const prevResultRef = useRef<JSX.Element>();

    // 이전 props와 현재 props 비교
    if (
      prevPropsRef.current !== undefined &&
      _equals(prevPropsRef.current, props)
    ) {
      return prevResultRef.current!;
    }

    // 렌더링 및 값 저장
    const result = React.createElement(Component, props);
    prevPropsRef.current = props;
    prevResultRef.current = result;

    return result;
  };
}
