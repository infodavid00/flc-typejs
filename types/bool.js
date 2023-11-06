import { typeerr } from "../utils/errors.js";

export default function bool(bool) {
  const typebool = bool;
  if (typeof typebool === "boolean") {
    return typebool;
  } else {
    throw typeerr(
      "boolean",
      typeof typebool === "number" && Math.round(typebool) !== typebool
        ? "float"
        : typeof typebool === "object" && typeof typebool.join === "function"
        ? "array"
        : typeof typebool
    );
  }
}
