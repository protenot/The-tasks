export function diff(a, b) {
  return Math.abs(a - b);
}

export function isWord(string) {
  const words = string.trim().split(" ");
  if (words.length === 1) {
    console.log(words.length);
    return true;
  } else {
    console.log(words.length);
    return false;
  }
}
