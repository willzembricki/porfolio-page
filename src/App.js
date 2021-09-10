import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import LinkList from "./components/LinkList";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div className="App">
      <div id="about">
        <About />
      </div>
      <div id="linklist">
        <LinkList />
      </div>
      <div id="contactinfo">
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
