import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function App(props) {
//   return (
//     <h1>
//       {props.saludo}, {props.nombre}!
//     </h1>
//   );
// }

// function withSaludo(saludo) {
//   return function WrappedComponentWithSaludo(WrappedComponent) {
//     // TODO: fetch

//     return function ComponenteDeVerdad(props) {
//       return (
//         <React.Fragment>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Estamos acompañando al wrappedcomponent</p>
//         </React.Fragment>
//       );
//     };
//   };
// }

// const AppWithSaludo = withSaludo("Hey")(App);

root.render(<App />);
