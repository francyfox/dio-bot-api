# Dio Bot Api (Nest)

Бот базируется на nestjs + sequilize + telegraf.
Основные задачи:

- [x] Юзеры. Сохранение базовой инфы (логин, пароль, почта)
- [x] Группы. Создание и привязка групп к пользователям.
- [x] Сессии. Middleware сессий, сохранений их через sequilize.
- [x] Сцены. Добавлены базовые Wizard сцены. Вход, привязка токена. (токен генерируется на сервере и будет использоваться для 2AUTH)
- - Получаем id пользователя из телеграма и сохраняем для дальнейшего общения.
- [ ] Base Api methods. (получение всех базовых api методов из коробки, ну и иметь возможность выбирать)
- - [ ] GET (ALL, BY ID, BY VALUE, BULK MANY)
- - [ ] POST (ONE, BULK MANY)
- - [ ] PATCH (BY ID, BY VALUE, BULK MANY)
- - [ ] DELETE (BY ID, BY VALUE, BULK MANY)
