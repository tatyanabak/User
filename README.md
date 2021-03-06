# Справочник пользователей
[Посмотреть результат](https://tatyanabak.github.io/User/)

**Задача**
* Необходимо будет сделать странички управления пользователями. С использованием NuxyJs. Дизайн, макет и прочее - на усмотрение.
Необходимо установить чистый NuxtJs фреймворк.
В нем создать страницу со списком пользователей. На этой странице можно:
1.	перейти в пользователя и посмотреть его данные.
2.	перейти в пользователя и отредактировать его данные. Т.е. отобразить форму с данными. Сохранение не нужно.
Итого 3 страницы. Все данные пользователей определять прямо в коде.

Данные пользователей использовать по структуре:
{
id,
login (имя входа),
family_name (Фамилия),
first_name (Имя),
middle_name (Отчество),
email (email),
phone (телефон),
password (пароль. должен быть скрыт),
secret_word (секретное слово),
created_at (Дата создания),
updated_at (дата изменения),
}

* Дополнительный баллы начисляются:
1.	Использование конфига .env
2.	Использование bootstrap 4
3.	Красиво оформленный интерфейс.
4.	Создать дополнительные кнопки для удобства - типа редактировать, сменить пароль
5.	Использование sass/scss
6.	Использовать API запрос на получение данных пользователя. (Положить данные в /static/users.json и /static/user.json)
7.	Использовать авторизацию по кнопке и проверку при входе в интерфейс.(Vuex)
8.	Написать 2 интерфейса в /admin и /lk с аналогичным функционалом.

Не надо пытаться использовать все дополнительные баллы. Выполнять только те моменты с которыми Вы справитесь. Оцениваться будет как выполнена основная задача и оформление. Лучше время потратить на это.

Необходимое затраченное время до 16 часов.
Время на установку фреймворка nuxtJs и nodeJs - не учитывается.
Учитывается только то время - которое Вы потратили на разработку.

В сопровождении с чем были сложности, что пришлось изучать, и на что было потрачено время.

---

**Используемые языки и технологии**
* Nuxt.js
* bootstrap
* scss

---
**Установка**

git clone https://github.com/tatyanabak/User.git my-project

cd my-project

git remote set-url origin new-remote-url

install dependencies
$ npm install

serve with hot reload at localhost:3000
$ npm run dev

build for production and launch server
$ npm run build
$ npm run start

generate static project
$ npm run generate

---
