import "./App.css";

function App() {
  const string1 = "Ovo je string";
  const string2 = "Ovo je drugi string";

  function odvojiZarezom(a, b) {
    return `${a}, ${b}`;
  }

  function randomBroj() {
    return Math.floor(Math.random() * 10 + 1);
  }

  function dvaRandomBroja() {
    return `${randomBroj()}, ${randomBroj()}`;
  }

  return (
    <div className="App">
      <h2>Ovo je naslov</h2>
      <h4>Ovo je string: {string1}</h4>
      <h4>
        Dvije varijable odvojene zarezom: {odvojiZarezom(string1, string2)}
      </h4>
      <h4>Ovo su dva random broja odvojena zarezom: {dvaRandomBroja()}</h4>
    </div>
  );
}

export default App;
