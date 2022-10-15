
import A01Props from "./components/A01Props"
import A02State from "./components/A02State"
import A03ClassEvent from './components/A03ClassEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05LifeCycle from './components/A05LifeCycle'
import A06PureComponent from './components/A06PureComponent'
import A07ShallowEqual from './components/A07ShallowEqual'
import A08HigherOrderComp from './components/A08HigherOrderComp'
import A09Currency from './components/A09Currency'

function App() {
  // 일반 변수. React의 감시 대상 아님. 값 변경해도 리랜더링 X
  // const [tel, setTel] = useState('010-1234-5678'); // 감시 대상 변수
  const address = 'Seoul';
  const arr = [1,2];
  const user = {name : "Hungbu", age : 30};
  const onAdd = (x,y)=> `${x}+${y} = ${x+y}`;

  return (
    <div className="m-3">
      <h1>Chap03 Class Component</h1>

      <A09Currency title = 'A09 Currency'></A09Currency>
      <A08HigherOrderComp name="Hunbu"></A08HigherOrderComp><br />
      <A08HigherOrderComp name="Nolbu"></A08HigherOrderComp><br />
      {/* <A07ShallowEqual></A07ShallowEqual><br /> */}
      <A06PureComponent></A06PureComponent><br />
      <A05LifeCycle check={false} color={'red'}></A05LifeCycle><br />
      <A04CreateDOM></A04CreateDOM><br />
      <A03ClassEvent></A03ClassEvent><br />
      <A02State></A02State><br />

      {/* "" 은 문자열로 전달되고 
        {}로 사용한 값은 변수 이름을 참조한다.
        값으로 전달은 {'문자열'}, 숫자인 경우 {30}, Boolean 은{true}으로 가능
      */}
      <A01Props name = "Nolbu" age = {30} address = {address}
        arr = {arr} user = {user} onAdd={onAdd} isChecked> 
        {/* 값은 속성으로 필요에 따라 전달<br/>
        But, 컴포넌트 내부의 뷰가 호출하는 곳에 따라 조금씩 다른 요소가 있다면
        사용하는 곳에서 전달 => {this.props.children}*/}   
      </A01Props>

    </div>
  );
}

export default App;
