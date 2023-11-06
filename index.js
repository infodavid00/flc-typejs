import array from "./types/array.js";
import bool from "./types/bool.js";
import int from "./types/int.js";
import object from "./types/object.js";
import string from "./types/string.js";
import float from "./types/float.js";
import { defaulterr } from "./utils/errors.js";

import url from "./tests/url.js";
import email from "./tests/email.js";
import mobile from "./tests/mobile.js";
import password from "./tests/password.js";

export function type(type, value) {
  if (type === "string") {
    return string(value);
  } else if (type === "int") {
    return int(value);
  } else if (type === "bool") {
    return bool(value);
  } else if (type === "array") {
    return array(value);
  } else if (type === "object") {
    return object(value);
  } else if (type === "float") {
    return float(value);
  } else if (type === "null") {
    return null;
  } else if (type === "undefined") {
    return undefined;
  } else if (type === "empty") {
    return "";
  } else {
    throw defaulterr();
  }
}

export function test(type, value) {
  if (type === "url") {
    return url(value);
  } else if (type === "email") {
    return email(value);
  } else if (type === "mobile") {
    return mobile(value);
  } else if (type === "password") {
    return password(value);
  }
}
