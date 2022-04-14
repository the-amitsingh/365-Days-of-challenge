
import './App.css';

let name = "Amit ";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1> Hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint non sapiente rerum. Dignissimos architecto odit, ad veritatis adipisci quibusdam necessitatibus at possimus? Dolorum, saepe.
      </p>
    </div>
    </>
  );
}

export default App;
