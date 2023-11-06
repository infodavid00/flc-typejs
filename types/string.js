import { typeerr } from "../utils/errors.js";

export default function strings(string) {
  const typestr = string;
  if (typeof typestr === "string") {
    return typestr;
  } else {
    throw typeerr(
      "string",
      typeof typestr === "number" && Math.round(typestr) !== typestr
        ? "float"
        : typeof typestr === "object" && typeof typestr.join === "function"
        ? "array"
        : typeof typestr
    );
  }
}
