let timer = 10
setInterval(()=>{
    if(timer>=0){
        console.log(timer)
        timer = timer -1
    }
}, 1000)
// 15
// VM2609:4 10
// VM2609:4 9
// VM2609:4 8
// VM2609:4 7
// VM2609:4 6
// VM2609:4 5
// VM2609:4 4
// VM2609:4 3
// VM2609:4 2
// VM2609:4 1
// VM2609:4 0

//시간3분 타이머
let timer = 180
setInterval(()=>{
    if(timer>=0){
        const minutes = Math.floor(timer/60)
        const seconds=timer%60
        console.log(String(minutes)+" : "+String(seconds))
        timer = timer-1
    }
} ,1000)
// 12
// VM3643:6 3 : 0
// VM3643:6 2 : 59
// VM3643:6 2 : 58
// VM3643:6 2 : 57
// VM3643:6 2 : 56
//같은거
let timer = 180
setInterval(()=>{
    if(timer>=0){
        const minutes = Math.floor(timer/60)
        const seconds=timer%60
        console.log(minutes+" : "+seconds)
        timer -= 1
    }
} ,1000)