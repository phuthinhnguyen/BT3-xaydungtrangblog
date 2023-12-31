import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Addnewpost from './components/Addnewpost';
import Updatepost from './components/Updatepost';
import Viewpost from './components/Viewpost';
function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewpost" element={<Viewpost />} />
          <Route path="/addnewpost" element={<Addnewpost />} />
          <Route path="/updatepost" element={<Updatepost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
 
}

export default App;
