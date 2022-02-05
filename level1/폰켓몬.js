function solution(nums) {
    var answer = nums.length/2;
    let check = [];
    for(let i of nums){
        if (check.includes(i)===false){
            check.push(i);
        }      
    }console.log(check);
    if (check.length<nums.length/2){
        answer=check.length;
    }
    return answer;
}