import Hello from './Hello';
import Wrapper from './Wrapper'

function App() {
  const style = {
    backgroundColor: 'red',
    color: 'aqua'
  }

  return (
    <div>
      <Wrapper>
        <div style={style}>
          style
        </div>
        <Hello
          // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
        />
        <Hello name="react" color="red" isSpecial/>
        <Hello color="pink"/>
      </Wrapper>
    </div>
  );
}

export default App;
