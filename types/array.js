import { typeerr } from "../utils/errors.js";

export default function array(arr) {
  const typearr = arr;
  if (typeof typearr === "object" && typeof typearr.join === "function") {
    return typearr;
  } else {
    throw typeerr(
      "array",
      typeof typearr === "number" && Math.round(typearr) !== typearr
        ? "float"
        : typeof arr
    );
  }
}
