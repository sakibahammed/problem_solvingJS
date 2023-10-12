var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let delayTime = (arrivalTime+delayedTime) % 24;
    return delayTime
};


console.log(findDelayedArrivalTime(10,1));