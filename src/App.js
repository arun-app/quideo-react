import "./App.css";
import VideoChat from "./pages/videoChat";
import Notifications from "./containers/notification";
import Sidebar from "./containers/sideBar";
// import ReactSample from "./pages/reactSample";
import { ContextProvider } from "./utils/context";
function App() {
  return (
    <div>
      <ContextProvider>
        <VideoChat />
        <Sidebar>
          <Notifications />
        </Sidebar>
        {/* <ReactSample /> */}
      </ContextProvider>
    </div>
  );
}

export default App;
