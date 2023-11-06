export default function password(password) {
  const strength = (password) => {
    if (password.split(" ").join("").length < 6) {
      return false;
    } else if (password.split(" ").join("").length > 26) {
      return false;
    } else {
      return true;
    }
  };
  return {
    password: password.split(" ").join(""),
    ready: strength(password),
  };
}
