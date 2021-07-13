 var removeDuplicates = (arr, newArr =[])=>{
    newArr = [...new Set(arr)]
    return newArr
 }

 var concat = (...arrays) =>{
    let newArr = [];
    newArr = [...arrays.flat()]
    return newArr
 }

 let arr1 = [1,2,3,2,1,1,1];
 let arr2 = [1,2,3,4,5,6,2,1];

 console.log(removeDuplicates(concat(arr1,arr2)))
