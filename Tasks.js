////////////////1 Задание
var nums = [5, 6, 8, 1, 3, 9, 4];
var num = 3;
var numsx = [];
for (i=0;i<=nums.length;i++){
    if(nums[i]===num){
        if(nums[i]!==num){
            continue
        }
    } else{
        numsx.push(nums[i]);
    }
}
numsx.pop();
nums = numsx;
console.log(nums);


////////////////2 задание
var arr=[];
var arrx=[];
var arrd=[];
var car={key:"car",description:"red"};
var bus={key:"bus",description:"white"};
var busx={key:"bus",description:"black"};
var carx={description:"red"};

function addBusCar(){
    arr.push(car);
    arr.push(bus);
    console.log(arr);
}

function updateBus(){
    for(i=0;i<=arr.length;i++){
        if(arr[i] === bus){
            arr[i] = busx;
        }
    }
    console.log(arr);
}

function removeCar(){
    for(i=0; i<=arr.length;i++){
        if(arr[i]===car){
            delete arr[i];
        }
    }
console.log(arr);
}