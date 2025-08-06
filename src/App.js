import AuthLogin from './pages/auth/AuthLogin.jsx';
import AuthRegister from './pages/auth/AuthRegister.jsx';
import {Route,Routes} from 'react-router-dom';
import MainTemplate from "./pages/templates/main/MainTemplate";
import GTranslate from 'pages/templates/main/GTranslate.jsx';
import {printDotEnvVars} from './utils/printTest';

function App() {

  return (
    <div /*{onLoad={() => printDotEnvVars()}*/>
      <GTranslate />

      <Routes>
        <Route path='/*' element={<MainTemplate />}></Route>
        <Route path='/login' element={<AuthLogin />} ></Route>
        <Route path='/register' element={<AuthRegister></AuthRegister>}></Route>
      </Routes>
    </div>
  );
}

export default App;
