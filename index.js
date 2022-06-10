
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = () => drivers.slice(0,2);
const returnLastTwoDrivers = () => drivers.slice(2,drivers.length);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiplier){
    return function(value){
        return multiplier * value;
}
} 
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers= function(drivers, selectDifferentDrivers){
    return selectDifferentDrivers(drivers);
}
