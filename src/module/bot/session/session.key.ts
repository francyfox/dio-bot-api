import { Context } from 'telegraf';

export type SessionKeyFunction = (ctx: Context) => string;

export const getSessionKey = ({ from, chat }: Context) => {
  if (from == null || chat == null) {
    return null;
  }

  return `${from.id}:${chat.id}`;
};

/**
 * @deprecated Use getSessionKey function and follow the default logic from the official documentation.
 */
export const getLegacySessionKey = (ctx: Context) => {
  const { chat, callbackQuery, from } = ctx;

  if (chat && chat.type === 'channel' && !from) {
    return `ch:${chat.id}`;
  }

  const id = chat
    ? chat.id
    : callbackQuery
    ? callbackQuery.chat_instance
    : from?.id;

  return `${id}:${from?.id}`;
};
