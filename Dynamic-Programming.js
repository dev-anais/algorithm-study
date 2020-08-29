/**refered to  https://www.zerocho.com/category/Algorithm/post/584b979a580277001862f182*/

/** 막대기 자르기 */
let p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
function cutRod(p, n){
    let res = [0]// 길이에 따른 모든 최고값을 구해서 넣어 놓는 배열  
    for(let i = 1; i <=n; i++){
        let q = -1 //최솟값인 0보다 적은 숫자여야 하므로
        for(let j = 1; j<=i; j++){
            q = Math.max(q, p[j] + res[i-j]) // 안 자른 것의 값 + 나머지 것을 잘랐을 때의 최고의 값을 구하는 과정
        }
        res[i] = q
    }
    return res[n]
}

/** 최장 공통 부분 수열 문제(LCS) */
