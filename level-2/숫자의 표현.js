function solution(n) {
    var answer = 0;
    let num = 0;
    let list = [];
    for (let i = 1; i<=n+1; i++){        
        if (num>n){
            while (num>n){
                num-=list.shift();
            }
        }        
        if (num<n){
            list.push(i);
            num+=i;
        } else if (num===n){
            answer+=1
            list.push(i);
            num+=i;
        }                   
    }
    return answer;
}