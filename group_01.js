var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

// first attempt

var ratingBonus = function (array){
  var bonus = 0;
  if (array[3]===3){
    bonus += (0.04);
    // return(bonus);
  }
  else if (array[3]===4){
    bonus += (0.06);
    // return(bonus);
  }
  else if (array[3]===5){
    bonus += (0.10);
    // return(bonus);
  }
  else {
  bonus += 0;
  // return(bonus);
  }
  // check senority
  bonus += seniority(array[1]);
  if (bonus > 0.13) {
    bonus = 0.13;
  }
  // check for salary over 65,000
  if (parseFloat (array[2])>65000 && array[3] > 2) {
    bonus -= 0.01;
  }
    return bonus;
};//end of ratingBonus

var seniority = function (idNumber) {
  if (idNumber.length===4) {
    return 0.05;
  } else {
    return 0;
  }
};//end of seniority

//checking for the percentage of overall bonus
function finalSalary(array) {
  return array[2] * (ratingBonus(array)+1);
} //end finalSalary

//checking for bonus amount


//Building final array from employees array
function finalArray(array) {
  var employeesNewArray = [];
  for (var i=0; i<array.length; i++) {
    var arrayAti = array[i];
    var innerArray = [];
    // push in employees name
    innerArray.push(arrayAti[0]);
    innerArray.push(ratingBonus(arrayAti)*100);
    innerArray.push(finalSalary(arrayAti));
    innerArray.push(parseInt(ratingBonus(arrayAti)*arrayAti[2]));
    employeesNewArray.push(innerArray);
  }
  return employeesNewArray;
}



console.log(finalArray(employees));
