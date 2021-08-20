//숫자 랜덤
Math.floor(Math.random()*1000000)
//837537
Math.floor(Math.random()*1000000)
//876983
Math.floor(Math.random()*1000000)
//242595
Math.floor(Math.random()*1000000)
//645536
Math.floor(Math.random()*1000000)
//9733
//문제!!!!자리수가 안맞는 경우가 나온다

const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
undefined
token
//"212861"
token
//"212861"
token
//"212861"

//함수로 반복적인 수 변경해줌
function getToken(){
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    console.log(token)
}

getToken()
//712212

const getToken2 = function(){
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    console.log(token)
}
//undefined
getToken2()
//VM1253:3 534664

const getToken3 = () =>{
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    console.log(token)
}

//undefined
getToken3()
//VM1293:3 195701