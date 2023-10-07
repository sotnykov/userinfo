let userAge;

do {
  userAge = prompt('When did you was born?');

  if (userAge === null) {
    alert("Pity that you didn't enter your year of birth...");
    break;
  }

  userAge = +userAge;

  if (isNaN(userAge)) {
    alert('Please, write a number!');
  } else if (userAge > 2017) {
    alert("Sorry, you're too young!");
  } else if (userAge < 1923) {
    alert('Unlikely...');
  }
} while (isNaN(userAge) || userAge > 2017 || userAge < 1923);

let userBornPlace;

do {
  userBornPlace = prompt('In which city do you live?');

  if (userBornPlace === null) {
    alert("Pity that you didn't enter your city...");
    break;
  }

  switch (userBornPlace) {
    case 'Kyiv':
    case 'Kiev':
    case 'Kiew':
      userBornPlace = 'the capital of Ukraine';
      break;
    case 'London':
      userBornPlace = 'the capital of Great Britain';
      break;
    case 'Madrid':
      userBornPlace = 'the capital of Spain';
      break;
    case 'Washington':
      userBornPlace = 'the capital of USA';
      break;
    case 'Rome':
      userBornPlace = 'the capital of Italy';
      break;
    case 'Ottawa':
      userBornPlace = 'the capital of Canada';
      break;
    case 'Warsaw':
      userBornPlace = 'the capital of Poland';
      break;
    case 'Bern':
      userBornPlace = 'the capital of Switzerland';
      break;
    default:
      userBornPlace = `a city called ${userBornPlace}`;
  }
} while (!userBornPlace);

let userFavSport;

do {
  userFavSport = prompt('What is your favourite sport?');

  if (userFavSport === null) {
    alert("Pity that you didn't enter your favourite sport...");
    break;
  }

  switch (userFavSport) {
      case 'Football':
      case 'Soccer':
        userFavSport = 'Cool! Do you want to become a second Messi?';
        break;
      case 'Basketball':
        userFavSport = 'Cool! Do you want to become a second Jordan?';
        break;
      case 'Formula 1':
      case 'Formula1':
      case 'Formula-1':
      case 'F1':
        userFavSport = 'Cool! Do you want to become a second Schumacher?';
        break;
      default:
        userFavSport = `Your favourite sport is ${userFavSport}!`;
    }
} while (!userFavSport);

if (userAge === null) {
  alert(`You are living in ${userBornPlace}! ` + userFavSport);
} else if (userBornPlace === null) {
  alert(`You are ${2023 - userAge} years old! ` + userFavSport);
} else if (userBornPlace === null && userFavSport === null) {
  alert(`You are ${2023 - userAge} years old! `);
} else if (userFavSport === null) {
  alert(`You are ${2023 - userAge} years old! ` + `You are living in ${userBornPlace}! `);
} else if (userAge === null && userBornPlace === null) {
  alert(`You are ${2023 - userAge} years old! `)
} else if (userAge === null && userFavSport === null) {
  alert(`You are living in ${userBornPlace}! `)
} else {
  alert(`You are ${2023 - userAge} years old! ` + `You are living in ${userBornPlace}! ` + userFavSport)
}