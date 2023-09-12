import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Education from './components/Education';
import Experience from './components/Experience';
import Extra from './components/Extra';
import PersonalProfile from './components/PersonalProfile';
import Preview from './components/Preview';
import Project from './components/Project';

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ width: '100%', padding: '3px', backgroundColor: '#701FD4' }}>
          <p align="center" className="text-white">Resume Builder</p>
        </div>
        <Routes>
          <Route path="/" element={<PersonalProfile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
