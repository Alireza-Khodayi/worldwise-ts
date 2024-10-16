export function convertToEmoji(countryCode: string): string {
  // Ensure the input is exactly 2 characters long and contains only letters
  if (
    countryCode.length !== 2 ||
    !/^[A-Z]{2}$/.test(countryCode.toUpperCase())
  ) {
    throw new Error(
      'Invalid country code. It must be a 2-letter uppercase string.',
    );
  }

  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
}
