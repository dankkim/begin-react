import Hello from './Hello';

function App() {
  const style = {
    backgroundColor: 'red',
    color: 'aqua'
  }

  return (
    <div>
      <div style={style}>
        aasd
      </div>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  );
}

export default App;
