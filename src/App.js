import "./styles.css";

export default function App() {
  return (
    <>
      <nav class="navbar">
        <div class="logo">MyLogo</div>
        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div class="container-flex-basis">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </div>

      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
      </div>
      <div class="container-center">
        <div class="item">Centered Item</div>
      </div>
      <div class="container-column">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
      </div>
      <div class="container-wrap">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
      </div>
      <div class="container-grow-shrink">
        <div class="item-grow">Item 1</div>
        <div class="item-grow">Item 2</div>
        <div class="item-grow">Item 3</div>
      </div>

    </>
  );
}
