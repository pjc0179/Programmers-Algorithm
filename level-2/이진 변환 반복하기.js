function solution(s) {
    var answer = [];
    let change = 0;
    let del = 0;
    while (s!=1){
        for(let i of s){
            if (i==="0"){
                del+=1;
            }
        }
        s = s.replace(/0/g,'');
        s = s.length.toString(2);
        change+=1;
    }
    answer.push(change);
    answer.push(del);
    return answer;
}