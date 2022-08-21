import { Markup } from 'telegraf';

export const actionButtons = () => {
  return Markup.keyboard(
    [
      Markup.button.callback('♥ Привязать телеграм к сайту', 'connect'),
      Markup.button.callback('📦 Выбрать уведомления', 'list'),
      Markup.button.callback('👪 Список пользователей в системе', 'list_user'),
    ],
    {
      columns: 3,
    },
  );
};
