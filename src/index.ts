export function returningArrays<T extends U | readonly U[], U>(arg: T): T {
  if (Array.isArray(arg)) {
    return arg;
  }
  return arg;
}

export function returningArraysOfAnotherType<T extends U | readonly U[], U, V>(
  arg: T,
  n: V
): T extends U[] ? readonly V[] : V {
  type CorrectReturnType = T extends U[] ? V[] : V;
  if (Array.isArray(arg)) {
    return [n] as unknown as CorrectReturnType;
  }
  return n as unknown as CorrectReturnType;
}

const exampleMap = {
  zcr: 1,
  chroma: 1,
  loudness: 1,
} as const;

type ValidKeys = keyof typeof exampleMap;

export function mappedType<T extends ValidKeys>(
  arg: T | T[]
): {
  [key in T]: any;
} {
  if (Array.isArray(arg)) {
    arg;
    let argz: T = arg[0];
    return {
      [arg[0]]: 1,
    } as unknown as { [key in T]: any };
  }
  return {
    [arg]: 1,
  } as unknown as { [key in T]: any };
}
