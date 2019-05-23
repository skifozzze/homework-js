# Критерии приема

- Создан репозиторий goit-js-hw-08
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на GitHub pages
- Задание выполнено строго по ТЗ
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier
- Для стилизации достаточно позиционирование и внешний вид приближенный к
  макету. Выделяй 20% времени на стили и 80% на функционал.

## Задание

Создай форму вопросника с возможностью пройти тест. Каждый вопрос это секция
формы, где ответы представлены группой радиокнопок.

![preview](./preview.jpg)

Заголовок теста и набор вопросов находится в объекте. Каждый вопрос представлен
объектом со следующими свойствами.

- `question` - текст вопроса
- `choices` - массив ответов
- `answer` - индекс правильного ответа из массива `choices`

Используй модули в браузере и экспортируй этот объект из файла `quiz-data.js`,
после чего импортируй в файл где эти данные будут использоваться.

```js
const quizData = {
  title: 'Тест на базовый уровень JavaScript.',
  questions: [
    {
      question: 'Что возвращает метод Array.prototype.filter()?',
      choices: [
        'Массив, если результат работы содержит более одного элемента',
        'Один элемент, если только он прошел фильтрацию',
        'Всегда массив',
      ],
      answer: 2,
    },
    {
      question: 'Как получить список всех ключей объекта obj?',
      choices: [
        'obj.keys()',
        'Object.keys(obj)',
        'obj.keys',
        'Object.getKeys(obj)',
      ],
      answer: 1,
    },
    {
      question: 'Что такое статическое свойство класса?',
      choices: [
        'Свойство доступное только экземплярам, но не классу',
        'Свойство доступное только классу, но не его экземплярам',
        'Свойство которое нельзя изменять после создания',
      ],
      answer: 1,
    },
    {
      question: 'Что такое обещание (promise)?',
      choices: [
        'Функция, представляющая конечный результат асинхронной операции',
        'Данные полученные в результате асинхронной операции',
        'Объект, представляющий конечный результат асинхронной операции',
      ],
      answer: 2,
    },
    {
      question: 'Выберите не существующий HTTP-метод.',
      choices: ['PUT', 'GET', 'GRAB', 'DELETE', 'PATCH'],
      answer: 2,
    },
    {
      question: 'Какой командой будет запускаться npm-скрипт с именем server?',
      choices: [
        'npm server',
        'npm start server',
        'npm execute server',
        'npm run server',
      ],
      answer: 3,
    },
  ],
};
```

- Необходимо динамически создать разметку формы по этим данным. Каркас формы +
  кнопка "Проверить" пусть изначально будут в HTML-документе.
- При сабмите формы проверь на сколько вопросов пользователь ответил верно и
  выведи (можно под формой) сообщение об успехе или неудаче. Успешным
  прохождение теста считается при `80%` или более верных ответов.

## HTML-разметка

Начальная разметка в HTML-документе.

```html
<form>
  <button type="submit">Проверить</button>
</form>
```

Каждый вопрос представлен следующей HTML-разметкой. Текст вопроса и количество
вариантов ответов зависит от данных вопроса. Подумай что подставить в атрибуты
`name` и `value` радиокнопок.

```html
<section>
  <h3>1. Текст вопроса</h3>

  <ol>
    <li>
      <label>
        <input type="radio" name="" value="" />
        Ответ 1
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="" value="" />
        Ответ 2
      </label>
    </li>
  </ol>
</section>
```