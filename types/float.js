import { typeerr } from "../utils/errors.js";

export default function float(float) {
  const typefloat = float;
  if (typeof typefloat === "number" && Math.round(typefloat) !== typefloat) {
    return typefloat;
  } else {
    throw typeerr(
      "float",
      typeof typefloat === "number" && Math.round(typefloat) === typefloat
        ? "integer"
        : typeof typefloat === "object" && typeof typefloat.join === "function"
        ? "array"
        : typeof typefloat
    );
  }
}
