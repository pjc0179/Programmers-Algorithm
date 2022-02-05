function solution(d, budget) {
    var answer = 0;
    d.sort(function(a,b){
        return a-b;
    });
    for (let i of d){
        if (budget-i<0){
            break
        } else{
            answer+=1;
            budget-=i;
        }
    }
    return answer;
}