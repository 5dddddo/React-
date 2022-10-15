import React,{useState} from 'react'

// function a(){
//   return ['abc', ()=> console.log('abc')]
// }

// const [str,method] = a();

function A02State() {
  // state는 hook으로 작성한다.
  // const [변수명, 변수를 변경하는 함수] = useState(기본값)
  const [name, setName] = useState('Nolbu');
  const [age, setAge] = useState(10);
  const [arr, setArray] = useState([10,20,30]);
  const [user,setUser] = useState({name : 'Hungbu', age : 20});
  const [isChecked, setIsChecked] = useState(true);

  const changeName = ()=> setName('Hungbu');
  const changeAge = ()=> setAge(20);

  // Array
  const addArray = ()=>{
    const random = Math.ceil(Math.random() * 100)
    setArray(arr.concat(random));
    // 메서드 방식
    // setArray(arr =>arr.concat(random));
  }
  const updateArray = (value, index)=> {
    const newArr = arr.map((item,i)=> index ===i? value : item);
    setArray(newArr);
  }
  const deleteArray = index => {
    const newArr = arr.filter((item, i) => index !== i);
    setArray(newArr);
  }

  // Object
  const addObject = (key,value)=>{
    const newObj = {...user,[key]:value};
    setUser(newObj);
  }
  const updateObject = (key,value)=>{
    const newObj = {...user,[key]:value};
    setUser(newObj);
  }
  const deleteObject = (key)=>{
    delete user[key];
    const newObj = {...user};
    setUser(newObj);
  }

  const changeCheck = ()=> setIsChecked(!isChecked);

  return (
    <div>
      <h3>A02 State</h3>

    <div>
      Name : {name}<br/>
      Age  : {age} <br/>
      Array : {arr[0]}<br/>
      User : {user.age} / {user.name}
      isChecked : {isChecked ? '동의' : '비동의'}
    </div>
    <br/>
    <div>
        {arr.map((item,i) => <span key={i}> {item}, </span>)}
    </div>

    <div>
      <button onClick={changeName}>Name</button>
      <button onClick={changeAge}>Age</button>

      {/* Array */}
      <button onClick={addArray}>Add Array</button>
      <button onClick={()=>updateArray(200,0)}>update Array</button>
      <button onClick={()=>deleteArray(0)}>delete Array</button>

      {/* Object */}
      <button onClick={()=>addObject('address', 'seoul')}>Add object</button>
      <button onClick={()=>updateObject('address', 'busan')}>update object</button>
      <button onClick={()=>deleteObject('address')}>delete object</button>

      {/* checked */}
      <button onClick={changeCheck}>Checked</button>
    </div>
    </div>
  )
}

export default A02State;