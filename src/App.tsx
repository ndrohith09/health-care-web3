import { useAccount } from "@starknet-react/core";
import Connect from "./components/Connect";
import Info from "./components/Info";
import SignForm from "./components/SignForm";
import TokenForm from "./components/TokenForm";
import NetworkInfo from "./components/NetworkInfo";
import Symptoms from "./components/Symptoms";
import URLPaths from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom"; 
import Navbar from "./components/Navbar";

function App() {
  const { isConnected, address } = useAccount();

  return (
    <Router>
        {isConnected ? ( 
    <div className="h-full p-4 flex flex-col bg-white">   
      <Navbar />           
      <div className="flex-1 flex text-center justify-center h-full">
          <div>  
            <URLPaths /> 
          </div> 
      </div>
    </div>
    ) : (
    <div className="h-full p-4 flex flex-col bg-white">
      <div className="flex-1 flex items-center text-center justify-center h-full">
      <Connect />
      </div>
    </div>
    )}  
    </Router>
  );
}

export default App;
