/**refered to  https://www.zerocho.com/category/Algorithm/post/584b979a580277001862f182*/

/**Activity Selection : 강의실에 유치할 수 있는 강의 묶음 구하기*/
let activity = [[1,1,3], [2,2,5], [3,4,7], [4,1,8], [5,5,9], [6,8,10], [7,9,11], [8,11,14], [9,13,16]];
function activitySelection(act) {
    let res = []
    let sorted = act.sort(function(a,b){
        return a[2] - b[2]
    })
    let last = 0
    sorted.forEach(element => {
        if(element[1] > last){
            last = element[2]
            res.push(element)
        }
    });
    /**
     * foreach와 map의 차이점은 foreach는 해당 배열 요소마다 한번씩 함수를 실행해주고,
     * map은 함수 결과를 모아서 새로운 배열로 리턴해줌. 
     */
    return res.map(function(p){
        return p[0]
    })
}

/** 분할 가능 배낭 문제 : 
 * 동적 프로그래밍과 동일한 룰이지만, 물건을 쪼개서 넣을 수 있게 됨 
 * */
//번호, 가치, 무게 순
let test = [[1,60,10], [2,100,20], [3,120,30]];

function fractionalKnapsack(item, w) {
    let sorted = item.sort(function(a,b){
        return b[1] / b[2] - a[1] / a[2] 
    })
    let limit = w
    let cur
    let res = 0
    for(let i = 0; i<sorted.length; i++){
        cur = sorted[i]
        if(limit > 0){
            if(limit >= cur[2]){
                res+=cur[1]
                limit-=cur[2]
            }else{
                res += cur[1] / cur[2] * limit
                limit = 0
            }
        }else{
            break
        }
    }
    return res
}
