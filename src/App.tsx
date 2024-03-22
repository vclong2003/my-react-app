import { Provider } from "react-redux";
import store from "./store";
import MainPage from "./components/MainPage/MainPage";
import "./assets/css/global.css";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
