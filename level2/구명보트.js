function solution(people, limit) {
    var answer = 0;
    people.sort(function (a,b){
        return a-b;
    });
    
    let l = 0;
    let r = people.length-1;
    for (let i = r; r>=l; r--){
        if (r===l){
            answer+=1;
        } else if (people[l]+people[r]<=limit){
            answer+=1
            l+=1;
        } else if (people[l]+people[r]>limit){
            answer+=1;
        }
    }
    return answer;
}