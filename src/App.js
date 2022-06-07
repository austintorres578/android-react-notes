
import NoteCreationSection from "./components/NoteCreationSection";
import NoteSelectionSection from "./components/NoteSelectionSection";
import { BrowserRouter, Route, Router, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<NoteSelectionSection />} />
          <Route path="/note" element={<NoteCreationSection/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
