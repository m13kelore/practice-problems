//parameters: two strings with spaces (evil, good)
// var evil = {
//     orc: 1,
//     men: 2,
//     wargs: 2,
//     goblins: 2,
//     urukhai: 3,
//     trolls: 5,
//     wizards: 10
// }

// var wizards = {
//     hobbit: 1,
//     men: 2,
//     elves: 3,
//     dwarves: 3,
//     eagles: 4,
//     wizards: 10
// }

//convert individual strings to numbers
//iterate through string arr
//multiply evil and good arrays by their point value array in the same position
//add value to respective score
//compare final sums
//return winner based on which side has a greater sum

function battle(evil, good) {
  var evil = [1, 2, 2, 2, 3, 5, 10];
  var good = [1, 2, 3, 3, 4, 10];
  var evilTotal = null;
  var goodTotal = null;

  var evilArr = evil.split(" ");
  var goodArr = good.split(" ");

  for (var evilIndex = 0; evilIndex < evilArr; evilIndex++) {
    evilTotal += evilArr[evilIndex] * evil[evilIndex];
  }

  for (var goodIndex = 0; goodIndex < goodArr; goodIndex++) {
    goodTotal += goodArr[goodIndex] * good[goodIndex];
  }

  if(evilTotal > goodTotal){
      return 'Evil has laid waste to the troops of good';
  }else if(goodTotal > evilTotal){
      return 'Good has laid waste to the troops of evil'
  }else{
      return 'draw'
  }
}
