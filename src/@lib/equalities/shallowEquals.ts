function isSameRef<T>(objA: T, objB: T): boolean {
  return objA === objB;
}

function isSameValue<T>(objA: T, objB: T): boolean {
  return objA === objB;
}

function isSameArray<T>(objA: T[], objB: T[]): boolean {
  return objA.every((value, index) => isSameValue(value, objB[index]));
}

function isSameObject<T extends Record<string, unknown>>(
  objA: T,
  objB: T
): boolean {
  return Object.keys(objA).every((key) => isSameValue(objA[key], objB[key]));
}

export function shallowEquals(objA: unknown, objB: unknown): boolean {
  // 배열 비교
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return isSameArray(objA, objB);
  }

  // 객체 비교
  if (typeof objA === "object" && typeof objB === "object" && objA !== null && objB !== null) {
    return isSameObject(
      objA as Record<string, unknown>,
      objB as Record<string, unknown>
    );
  }

  // 원시타입 참조 및 값 비교
  return isSameRef(objA, objB) && isSameValue(objA, objB);
}
