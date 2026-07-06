let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 25;
if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 a.m.`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 a.m.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 p.m.`);
} else {
  console.log('Please see the registration desk.');
}