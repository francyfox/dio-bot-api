import { Context, MiddlewareFn } from 'telegraf';
import { getSessionKey, SessionKeyFunction } from './session.key';
import { Session } from './session.model';

export const session = <C extends Context = Context>(): MiddlewareFn<C> => {
  const options = {
    sessionName: 'session',
    collectionName: 'Sessions',
    sessionKeyFn: getSessionKey,
  };

  const saveSession = (key: null | string, data: any) =>
    Session.upsert({
      sessionId: key ?? '', // TODO: Почему он пишет userId дважды?
      data: JSON.stringify(data),
    });
  const getSession = async (key: string) => {
    try {
      const data = await Session.findByPk(key, { rejectOnEmpty: true });
      return JSON.parse(data.data);
    } catch (e) {
      return {};
    }
  };

  const { sessionKeyFn: getKey, sessionName } = options;

  return async (ctx: Context, next) => {
    const key = getKey(ctx);
    const data = key == null ? undefined : await getSession(key);

    // @ts-ignore
    ctx[sessionName] = data;

    await next();

    // @ts-ignore
    if (ctx[sessionName] != null) {
      // @ts-ignore
      await saveSession(key, ctx[sessionName]);
    }
  };
};
