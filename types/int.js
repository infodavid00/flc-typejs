import { typeerr } from "../utils/errors.js";

export default function int(int) {
  const typeint = int;
  if (typeof typeint === "number" && Math.round(typeint) === typeint) {
    return typeint;
  } else {
    throw typeerr(
      "integer",
      typeof typeint === "number" && Math.round(typeint) !== typeint
        ? "float"
        : typeof typeint === "object" && typeof typeint.join === "function"
        ? "array"
        : typeof typeint
    );
  }
}
