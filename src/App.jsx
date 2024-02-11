import './App.css'
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import About from "./components/About";
import Dashboard from './components/Dashboard';
import ItemDetails from "./components/ItemDetails";
import NotFound from "./components/NotFound";
import EditItemDetails from './components/EditItemDetails';


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/itemdetails/:itemId" element={<ItemDetails />} />
        <Route path="/itemdetails/:itemId/edit" element={<EditItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
