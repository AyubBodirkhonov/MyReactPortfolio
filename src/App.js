import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component'
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Work from "./components/work/work.component";
import Contact from "./components/contact/contact.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
};

export default App;
