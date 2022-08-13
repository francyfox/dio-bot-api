const colors = {
  alert: '\x1b[36m%s\x1b[0m',
  warn: '\x1b[33m%s\x1b[0m',
  danger: '\x1b[31m%s\x1b[0m',
};
const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`;

export const DIO = {
  colors,
  TELEGRAM_URI,
};
