const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {

  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const allTheater = [...theaterIXX, ...theaterVGC]

  let countE = 0;

  allTheater.forEach((film) => {
    if (film.hasil === emotion) {
      countE++;
    }
  })

  return countE;

};

module.exports = {
  promiseOutput,
};