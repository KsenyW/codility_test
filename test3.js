/**
 * Created by Kseny on 29.12.2017.
 */

// A - array of weights
// B - array of floors
// M - max number of floors
// X - max number of people in elevator
// Y - weigh limit for elevator

// [40,40,100,80,20],[3,3,2,2,3], 3, 5, 200
// [60, 80, 40],[2,3,5], 5, 2, 200

function solution(A, B, M, X, Y){
    var startIndex = 0, stopIndex = 0;
    var result = 0;
    var weightSum = 0;

    while(stopIndex + 1 < A.length){
        weightSum = 0;
        subSolution();
        result += (countUniqNums(B.slice(startIndex, stopIndex + 1)) + 1);
        startIndex = stopIndex + 1;
    }

    function subSolution(){
        var j = 0;
        for(var i = startIndex; i <= A.length; i++){
            j++;
            if(weightSum + A[i] < Y && j <= X){
                weightSum += A[i];
                stopIndex = i;
            } else {
                return weightSum;
            }
        }
    }
    
    return result;
}

function countUniqNums(arr){
    var uniqs = [arr[0]];

    for(var i = 0; i < arr.length; i++){
        if(!uniqs.includes(arr[i])){
            uniqs.push(arr[i]);
        }
    }

    return uniqs.length;
}