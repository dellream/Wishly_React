# Приложение "Список желаний"

- [**Стек**](#stack)
- [**Структура проекта (много важных пояснений по файлам)**](#project_files)
- [**Теоретическая сводка**](#theory)
- [**Доступные скрипты**](#scripts)

<a name="stack"></a>
## Стек

Проект был создан с целью ознакомления со стеком:\
[typescript](https://www.typescriptlang.org/) + [react](https://reactjs.org/) + [redux](https://redux.js.org/) + [saga](https://redux-saga.js.org/) + [react-router](https://reactrouter.com/) + [sass](https://sass-lang.com/) + [webpack](https://webpack.js.org/)

## Теоретическая сводка

Данный раздел необходим для разъяснения технологий, используемых в приложении.\
Здесь будет описан процесс написания приложения

**Создание index.tsx**\
Это точка входа в приложение.\
Здесь выполняется инициализация самого React-приложения и связывание с DOM (через createRoot).\
Основная задача: подготовить приложение к запуску и "вставить" его в корневой элемент HTML.\

Инициализация приложения происходит в функции init():
1. **createRoot** (из react-dom/client)\
   Отвечает за создание корневого узла приложения, связанного с DOM.\
   Рендерит React-компоненты внутри HTML-элемента с ID root.
2. **Provider** (из react-redux)\
   Оборачивает всё приложение, чтобы дать доступ к Redux Store.\
   Позволяет компонентам через хуки (useSelector, useDispatch) взаимодействовать с глобальным состоянием.
3. **store**\
   Хранилище состояния приложения, созданное в Redux.\
   Используется для управления глобальными данными, которые могут быть общими для многих компонентов (например, авторизация пользователя, настройки, корзина покупок).

Здесь необходимо пояснить, как работает Redux.
### Redux
**Redux** — это библиотека для управления глобальным состоянием приложения. Она упрощает обмен данными между компонентами.\
Принцип его действия строится на том, чтобы состояние компоненты выносить во внешнюю зависимость и любая другая компонента получала актуальное состояние уже из этой внешней зависимости

![reduxComponents.png](git/reduxComponents.png)

Основные элементы Redux:
1. **Store**\
   Хранилище, где лежит всё состояние приложения.\
   Это единый объект, доступный для всех компонентов. На рисунке выше этот объект обозначен зеленым цветом
2. **Action**\
   Действие, описывающее, что нужно сделать.
   Это простой объект с типом (type) и данными (payload). Другими словами actions определяют, как мы можем изменять данные
3. **Reducer**\
   Функция, которая принимает текущее состояние и Action, а возвращает новое состояние.
   Решает, как изменить Store на основе Action. Сам Reduser напрямую изменяет состояние
4. **Dispatch**\
   Способ отправить Action в Store, чтобы Reducer обновил состояние.\
   То есть Dispatch это некий диспетчер, который отправляет сообщения (actions) Reduser'у. 
5. **Provider**\
   Обёртка, которая делает Store доступным всем компонентам в приложении через контекст.

Как всё работает вместе?\
1. Пользователь выполняет действие (например, нажимает кнопку).\ 
2. Вызывается dispatch, который отправляет Action.\
3. Reducer получает текущее состояние и Action, создаёт новое состояние.\
4. Store обновляет глобальное состояние.\
5. Компоненты, подписанные на Store, автоматически обновляются.

В src/index.tsx приложение App оборачивается в Provider, который принимает store в качестве аргумента.
```typescript jsx
root.render(
        <Provider store={ store }>
           <App />
        </Provider>
);
```
В свою очередь store настраивается в src/store/index.ts

Очевидно, что в крупном приложении недостаточно иметь один Reducer.\
Для решения данной проблемы создают combineReducers
```typescript
const rootReducer = combineReducers({
   modals: modalsReducer,
   ui: uiReducer,
   user: userReducer,
   alertList: alertListReducer
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
   const sagaMiddleware = createSagaMiddleware();

   const isDevelopment = process.env.NODE_ENV === 'development';

   const store = configureStore({
      reducer: rootReducer,
      devTools: isDevelopment,
      middleware: getDefaultMiddleware =>
              getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
      preloadedState
   });

   sagaMiddleware.run(sagas);

   return store;
};

const store = setupStore();
```
`rootReducer` собираем все reducers приложения в один корневой.\
`combineReducers` объединяет все редьюсеры в один главный редьюсер rootReducer, который управляет состоянием приложения.\
`configureStore` создает Redux-хранилище.\
`rootReducer` передается в configureStore, чтобы указать, как управлять состоянием.\
`sagaMiddleware` ОПИСАТЬ, ЧТО ТАКОЕ, ЗАЧЕМ ИСПОЛЬЗУЕТСЯ, СДЕЛАТЬ ОТДЕЛЬНЫЙ ТОПИК?
`preloadedState` опциональное начальное состояние для всех Reducers, если preloadedState не передан, используется состояние, заданное в каждом редьюсере через initialState



## Доступные скрипты

Склонировав репозиторий и находясь в корне проекта, вам доступны команды:

### `npm start`

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

Страница будет обновляться при внесении изменений.\
Вы также можете увидеть ошибки от линтеров в консоли.