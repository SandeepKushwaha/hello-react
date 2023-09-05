export default function App() {
  function showAlert() {
    alert('Hello React!');
  }

  function handleInputChange(e) {
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <button onClick={showAlert}>Show Alert</button>
      <input onChange={handleInputChange} />
    </div>
  );
}
