export default function url(url) {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/;
  if (regex.test(url) === true) {
    return url;
  } else {
    return false;
  }
}
