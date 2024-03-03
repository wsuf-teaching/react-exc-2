function App() {

  const names = ["Alice", "Bob", "Charlie", "Donald", "Emily", "Freya"];

  return (
    <div>

      {/* apply the regular CSS class "mainheading" defined in index.css on the h1 below */}
      <h1>Styling exercise</h1>


      {/* use inline styles to make the h3 below have a red border, blue colour and yellow background */}
      <h3>Text with red border, blue colour and yellow background</h3>

      {/* create a styled component called "Card" (which is a div) that wraps the h2 below (you can put the h2 between its opening and closing tags and it will be displayed */}
      {/* styled components are already installed, you just have to use them */}
      {/* example properties you can use ==> border: 2px solid black;display: block; margin: auto; padding: 5px; width: 500px; */}
      {/* also make the Card have 2px dashed red border when hovering over it */}
      <h2>This should be inside the styled component</h2>

      {/* extend the <li> below with conditional (inline) style that sets every second element's background colour to red, and the rest to blue */}
      <ul>
        {names.map((name, i) => 
          <li key={i}>{name}</li>
        )}
      </ul>

      {/* import the App.module.css properly, and apply the CSS module classes on the appropriate elements below */}
      {/* footer on the footer, footer-section on the divs, footer-title on the h4s, footer-list on the uls */}
      {/* remember, that these are CSS module classes, they are used differently than regular classes */}

      <footer>
        <div>
          <h4>Footer 1</h4>
          <ul>
            <li>E-mil</li>
            <li>Fecebook</li>
            <li>Twotter</li>
            <li>TikTak</li>
          </ul>
        </div>
        <div>
          <h4>Footer 1</h4>
          <ul>
            <li>E-mil</li>
            <li>Fecebook</li>
            <li>Twotter</li>
            <li>TikTak</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
