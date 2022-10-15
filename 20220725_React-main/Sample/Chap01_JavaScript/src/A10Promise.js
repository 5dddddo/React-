
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

function normalFunc() {
    console.log('start');

    sleep(1000);

    console.log('end');
}
// normalFunc();
// console.log('');

function one (){
    console.log('1. start');
    let result = 0;
    // Back 단으로 넘어가서 작업중
    setTimeout(()=>{
        console.log('2. 작업완료')
        result = 100;
    },2000);
    console.log(result)
    console.log('3. end')
}


//one();


function two (){
    console.log('1. start');
    // Back 단으로 넘어가서 작업중
    setTimeout(()=>{
        console.log('2. 작업완료')
        let result = 0;
        result = 100;
        setTimeout(() => {
            console.log('2-1. 작업완료')
            console.log(result+200);
        }, 1000);
    },2000);
    console.log(result)
    console.log('3. end')
}

// two();

function three(ms){
    console.log('1. start')
    const promise = new Promise((resolve, reject)=>{
        // resolve = data => console.log(data)
        // reject = err => console.error(err)
        setTimeout(() => {
            if(ms>1000){
                resolve({msg:'성공입니다', result:100})
            }else{
                reject('실패입니다')
            }
        }, ms);
    })
    
    console.log('2. end')
    return promise;
}


three(2000)
    .then(data => { // then에는 resolve에 전달할 함수 정의
        console.log(data)
        return three(1000)  // 이 값은 다음 then 으로 넘어감
    })      
    .then(data => { // then에는 resolve에 전달할 함수 정의
        console.log(data)
        return three(200)  // 이 값은 다음 then 으로 넘어감
    })   
    .catch(err => console.error(err)); // catch에는 reject에 전달할 함수 정의