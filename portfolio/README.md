# Портфолио — структура проекта

```
portfolio/
├── index.html          ← сама страница
├── css/
│   └── style.css        ← все стили
├── js/
│   └── script.js         ← вся логика
└── images/               ← сюда закидываете свои фото
```

## Куда класть фотографии

Просто положите ваши файлы в папку `images/` и назовите их ровно так, как указано ниже
(в `index.html` уже прописаны эти пути — переименовывать код не нужно):

| Файл в `images/`                  | Что это за фото                              |
|------------------------------------|-----------------------------------------------|
| `profile.jpg`                      | Ваше круглое фото профиля (1-й слайд)         |
| `project-jack-daniels.jpg`         | Баннер Jack Daniel's                          |
| `project-earbuds.jpg`              | Промо наушников CMF Buds White                |
| `project-re-zero.jpg`              | Обложка Re:Zero                               |
| `project-haori.jpg`                | Haori Tailoring                               |
| `project-kinoponorama.jpg`         | Афиша «Кинопонорама»                          |
| `project-shakal.jpg`               | Брендинг Shakal Energy (мерч)                 |

Если хотите добавить ещё проекты — скопируйте один блок `<article class="project-card">…</article>`
в `index.html` (в секции `<!-- PORTFOLIO -->`) и укажите свой файл в `src="images/ваш-файл.jpg"`.

## Как открыть

1. Откройте папку `portfolio` в VS Code.
2. Поставьте расширение **Live Server** (если ещё нет) — правой кнопкой по `index.html` → **Open with Live Server**.
   Либо просто откройте `index.html` двойным кликом в браузере.

## Что можно поменять

- **Телефон / соцсети** — в `index.html`, блок `<!-- CONTACT -->`.
- **Текст "О себе"** — в `index.html`, блок `<!-- HERO / ABOUT -->`, теги `<p class="bio">`.
- **Ссылки на проекты** — у каждой карточки есть `<a href="#" class="project-link">→</a>`, замените `#` на реальную ссылку (Behance, Instagram-пост и т.д.).
- **Цвета/шрифты** — в `css/style.css`, переменные в самом верху файла (`:root { ... }`).
