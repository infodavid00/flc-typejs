export default function mobile(mobile) {
  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  if (regex.test(mobile) === true) {
    return mobile;
  } else {
    return false;
  }
}
