import "tailwindcss/tailwind.css";

import Navbar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Feedback from "./components/Feedback";

// import FeedbackForm from "./components/FeedbackForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <main className=" flex-1 overflow-x-auto overflow-y-auto divide-y ">
        <Home />
        <About/>
        <Feedback />
        <Footer />
      </main>
    </div>
  );
}

export default App;