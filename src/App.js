import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import './App.css'
import Alert from "./components/Alert/Alert";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Alert />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
