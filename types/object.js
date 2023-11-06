import { typeerr } from "../utils/errors.js";

export default function object(arr) {
  const typeobj = arr;
  if (typeof typeobj === "object" && typeof typeobj.join !== "function") {
    return typeobj;
  } else {
    throw typeerr(
      "object",
      typeof typeobj === "number" && Math.round(typeobj) !== typeobj
        ? "float"
        : typeof typeobj === "object" && typeof typeobj.join === "function"
        ? "array"
        : typeof typeobj
    );
  }
}
