# Podarochnaya Frontend

Фронтенд для сервиса вишлистов. Приложение позволяет создавать и управлять списками желаний.

## Установка и запуск

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите проект:
   ```bash
   npm run dev
   ```
3. Откройте в браузере: http://localhost:5173.

## Запуск с помощью Docker

1. Соберите Docker-образ:
   ```bash
   docker build -t wishlist-frontend .
   ```
2. Запустите контейнер:
   ```bash
   docker run -p 5173:5173 wishlist-frontend
   ```
3. Откройте в браузере: http://localhost:5173.
