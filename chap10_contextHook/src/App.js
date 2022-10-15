import ColorBox from './components/ColorBox'
import TodoTemplate from './components/TodoTemplate'
import SelectColor from './components/SelectColor';
import { TodoListProvider } from './modules/TodoListContext';

// Provider(제공자) Consumer(발행자)를 제공함 
import ColorBoxContext from './modules/ColorBoxContext';
import {SelectColorProvider} from "./modules/SelectColorContext";

function App() {
  const data = {contextName : 'colorBox', color:'orange'};

  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>
      
      {/* Provider는 하위 컴포넌트에 값 제공해줌 */}
      <ColorBoxContext.Provider value={data}>
        <SelectColorProvider>
          <ColorBox />
          <SelectColor/>
        </SelectColorProvider>
      </ColorBoxContext.Provider>
      <hr />
      <TodoListProvider>
        <TodoTemplate />
      </TodoListProvider>
    </div>
  );
}

export default App;
