export const validateToken = (message: string): boolean => {
  const isToken = message.search('t_') !== -1;
  return message !== '' && isToken && message.length === 20;
};
