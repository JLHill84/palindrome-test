import './App.css';

function App() {
  let input;
  const handleInput = (e) => {
    input = e.target.value
    console.log('input: ', input)
  }
  return (
    <div className="App">
      <div className='main'>
        <div className='inputArea'>
          <input type='text' onChange={(e) => handleInput(e)} />
          <button>submit</button>
        </div>
        <div>sweeeet</div>
      </div>
    </div>
  );
}

export default App;
