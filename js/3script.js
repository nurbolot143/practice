/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;
const start = () => {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
};

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const rememberMyFilms = () => {
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
};

// rememberMyFilms();

const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('"Вы классический зритель"');
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
};

// detectPersonalLevel();

const showMyDB = (obj) => {
  if (obj.privat == false) {
    console.log(obj);
  }
};

const writeYourGenres = (obj) => {
  for (let i = 0; i < 3; i++) {
    obj.genres.push(prompt(`Ваш любимый жанр под номером ${i + 1}`));
  }
};

writeYourGenres(personalMovieDB);
showMyDB(personalMovieDB);
