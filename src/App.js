import { CatGame } from "./components/CatGame";
import { StartGame } from "./components/StartGame";
import { store } from "./store/store";
import { Provider } from "react-redux";
// import { AppRouter } from "./components/AppRouter";
import { CatGameScreen } from "./components/CatGameScreen";

function App() {
  return (
    <Provider store={store}>
      <CatGameScreen />
    </Provider>
  );
}
var swLocation = "./sw.js";
if (navigator.serviceWorker) {
  var url = window.location.href;

  if (url.includes("localhost")) {
    swLocation = "./catsApp/sw.js";
  }
  navigator.serviceWorker.register(swLocation);
}

export default App;
