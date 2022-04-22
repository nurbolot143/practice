/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt("Один из последних просмотренных фильмов?");
      const grade = prompt("На сколько оцените его?");
      if (
        lastFilm != null &&
        grade != null &&
        lastFilm != "" &&
        grade != "" &&
        lastFilm < 50
      ) {
        personalMovieDB.movies[lastFilm] = grade;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('"Вы классический зритель"');
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 1; i++) {
      const movie = prompt(`Ваш ваши любимые жанры через запятую`);
      if (movie !== null || movie !== "") {
        personalMovieDB.genres = movie.split(", ");
      } else {
        i--;
      }
    }

    personalMovieDB.genres.forEach((movie, idx) =>
      console.log(`Любимый жанр #${idx + 1} - это ${movie}`)
    );
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
};

personalMovieDB.writeYourGenres();
