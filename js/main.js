let userAge;

do {
  userAge = prompt('When did you was born?');

  if (userAge === null) {
    alert("Pity that you didn't enter your year of birth...");
    break;
  }

  userAge = +(2023 - userAge);

  if (isNaN(userAge)) {
    alert('Please, write a number!');
  } else if (userAge < 0 || userAge > 100) {
    alert('Unlikely...');
  }
} while (isNaN(userAge) || userAge > 100 || userAge < 0);

let userBornPlace;

do {
  userBornPlace = prompt('In which city do you live?');

  if (userBornPlace === null) {
    alert("Pity that you didn't enter your city...");
    break;
  } else if (userBornPlace.trim() === '' && userBornPlace !== null) {
    alert('Write something or click cancel');
  } else {

    switch (userBornPlace) {
      case 'Kyiv':
      case 'Kiev':
      case 'Kiew':
        userBornPlace = 'You are living in the capital of Ukraine! ';
        break;
      case 'London':
        userBornPlace = 'You are living in the capital of Great Britain! ';
        break;
      case 'Madrid':
        userBornPlace = 'You are living in the capital of Spain! ';
        break;
      case 'Washington':
        userBornPlace = 'You are living in the capital of USA! ';
        break;
      case 'Rome':
        userBornPlace = 'You are living in the capital of Italy! ';
        break;
      case 'Ottawa':
        userBornPlace = 'You are living in the capital of Canada! ';
        break;
      case 'Warsaw':
        userBornPlace = 'You are living in the capital of Poland! ';
        break;
      case 'Bern':
        userBornPlace = 'You are living in the capital of Switzerland! ';
        break;
      default:
        userBornPlace = `You are living in ${userBornPlace}! `;
    }
  }
} while (userBornPlace.trim() === '');

let userFavSport;

do {
  userFavSport = prompt('What is your favourite sport?');

  if (userFavSport === null) {
    alert("Pity that you didn't enter your favourite sport...");
    break;
  } else if (userFavSport.trim() === '' && userFavSport !== null) {
    alert('Write something or click cancel');
  } else {

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
  }
} while (userFavSport.trim() === '');

if (userAge === null && typeof userBornPlace !== 'string' && typeof userFavSport !== 'string') {
  alert("You didn't write anything!");
} else if (userAge === null) { 
  alert(userBornPlace + userFavSport);
} else if (typeof userBornPlace !== 'string') {
  alert(`You are ${userAge} years old! ` + userFavSport);
} else if (userFavSport === null) {
  alert(`You are ${userAge} years old! ` + userBornPlace);
} else if (userAge === null && userBornPlace === null) {
  alert(userFavSport + (userBornPlace || ''));
} else if (userAge === null && userFavSport === null) {
  alert(userBornPlace + (userFavSport || ''));
} else if (userBornPlace === null && userFavSport === null) {
  alert(`You are ${userAge} years old! `);
} else {
  alert(`You are ${userAge} years old! ` + userBornPlace + userFavSport);
}