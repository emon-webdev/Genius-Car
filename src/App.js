import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes";

function App() {
  return (
    <div  className="max-w-screen-xl mx-auto px-4">
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
      {/* toast.success('Successfully toasted!') */}
    </div>
  );
}

export default App;
