import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import './App.css'
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
