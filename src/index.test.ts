import { mappedType, returningArrays, returningArraysOfAnotherType } from ".";

describe("returning arrays", () => {
  it("returns an array type if the argument is an array type", () => {
    const result = returningArrays(["a", "b", "c"]);
    let r: string[] = result;
    r;
  });

  it("returns single string if arg is a single string", () => {
    const result = returningArrays("c");
    let r: string = result;
    r;
  });
});

describe("returning arrays of another type", () => {
  describe("when the first argument is an array", () => {
    it("returns an array of the type of the second argument", () => {
      let n = 1;
      const result = returningArraysOfAnotherType([""], n);
      let r: readonly number[] = result;
      r;
    });
    it("returns an array of the type of the second argument (constant second arg)", () => {
      const result = returningArraysOfAnotherType([""], 1);
      let r: readonly number[] = result;
      r;
    });
  });
  describe("when the first argument is not an array", () => {
    it("returns an array of the type of the second argument", () => {
      let n = 1;
      const result = returningArraysOfAnotherType("", n);
      let r: number = result;
      r;
    });
    it("returns an array of the type of the second argument (constant second arg)", () => {
      const result = returningArraysOfAnotherType("", 1);
      let r: number = result;
      r;
    });
  });
});

describe("returning a mapped object based on the keys provided in the first arg", () => {
  describe("when the first argument is a const T", () => {
    it("returns a limited NonNullable mapped type", () => {
      const f = "zcr";
      let result = mappedType(f);
      result.zcr;
      // @ts-expect-error
      result.chroma;
      // @ts-expect-error
      result.loudness;
    });
  });
  describe("when the first argument is a readonly T[]", () => {
    it("returns a limited NonNullable mapped type", () => {
      const f = ["zcr", "chroma"] as const;
      let result = mappedType(f);
      result.zcr;
      result.chroma;
      // @ts-expect-error
      result.loudness;
    });
  });
  describe("when the first argument is a string", () => {});
});
