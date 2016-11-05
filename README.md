# React UI kit boilerplate

Стартовый шаблон для разработки независимых Реакт-компонентов.

- [react-styleguidist](https://github.com/sapegin/react-styleguidist) для удобной разработки и документирования;
- stylus для стилизации компонентов;
- eslint с конфигурацией airbnb для линтинга;
- [plop](https://github.com/amwmedia/plop) для генерации шаблонных файлов.

## Рабочий процесс

Подготовка к работе:

```bash
$ git clone git@github.com:andrew--r/react-ui-kit-boilerplate.git
$ cd react-ui-kit-boilerplate
$ rm -rf .git
$ git init # важно инициализировать репозиторий до установки зависимостей, чтобы правильно установился прекоммит-хук
$ npm i -g yarn # если yarn ещё не установлен
$ yarn # устанавливаем зависимости
```

Запуск локального сервера для разработки:

```bash
$ yarn start
```

Сборка новой версии:

```bash
$ yarn build:bundle
```

Сборка стайлгайда:

```bash
$ yarn build:styleguide
```

Запуск линтера:

```bash
$ yarn lint
```

Быстрое создание заготовки для нового компонента:

```bash
$ yarn plop
```
