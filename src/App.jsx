
import "./App.css";
import { BrowserRouter, Routes, Link ,Route} from "react-router-dom";
function App() {
  return <div>
    <BrowserRouter>
    <Link to="/">Allen</Link>

    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
    <Link to="/neet/online-coaching-class-13">Class 13</Link>
      <Routes>
        <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="neet/online-coaching-class-13" element={<Class13Program />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

function LandingPage() {
  return <div>
    <h1>Welcome to Allen</h1>
  </div>;
}
function Class11Program() {
  return <div>
    <h1>Class 11 Program</h1>
  </div>;
}

function Class12Program() {
  return <div>
    <h1>Class 12 Program</h1>
  </div>;
}

function Class13Program() {
  return <div>
    <h1>Class 13 Program</h1>
  </div>;
}

export default App;
