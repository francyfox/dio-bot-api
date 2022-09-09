import crypto from 'crypto';

export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * @param {number} length
 * @param {string} chars
 * @param {string} prefix - like "t_"
 */
export const randomString = (length: number, chars: string, prefix: string) => {
  if (!chars) {
    throw new Error("Argument 'chars' is undefined");
  }

  const charsLength = chars.length;
  if (charsLength > 256) {
    throw new Error(
      "Argument 'chars' should not have more than 256 characters" +
        +', otherwise unpredictability will be broken',
    );
  }

  const randomBytes = crypto.randomBytes(length);
  const result = new Array(length);

  let cursor = 0;
  for (let i = 0; i < length; i++) {
    cursor += randomBytes[i];
    result[i] = chars[cursor % charsLength];
  }

  const token = result.join('').replace(/([\w]|.){2}/, prefix);

  return token;
};

/**
 * Generate random crypto string with prefix
 * @param {number} length
 * @param {string} prefix - with 2 chars, like "t_"
 */
export const randomAsciiString = (length: number, prefix: string) => {
  return randomString(
    length,
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    prefix,
  );
};
