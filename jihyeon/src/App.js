import Hello from './Hello';

function App() {
  return (
    <>
      <Hello students="학생여러분!!" color="blue" />
      <Hello students="선생님!!" />
      <Hello />
    </>
  );
}

export default App;