// libA.js

//import {z} from './lib/libC'; // z 변수 가져오기
//import libC from './lib/libC'; // export default 가져오기
// 동시에 가져다 쓰는 것도 가능
import libC, {z} from './lib/libC'; // export default 가져오기

// export : 내부에서 쓰는 변수가 아닌 외부 파일에서 import 명령으로 호출해서 사용할 변수
export let name = 'Library A' + libC.x;
export const age = z;

export const changeName = ()=> alert('click event');


// export 각각 붙이기 싫으면 합쳐서 가능
//export {name, age, changeName};