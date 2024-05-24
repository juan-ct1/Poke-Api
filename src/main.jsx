import ReactDOM from "react-dom/client";
import { App } from "./assets/App";
import "./sass/Index.scss"

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App/>)

console.log(root)