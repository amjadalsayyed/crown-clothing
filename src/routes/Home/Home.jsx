import { Outlet } from "react-router-dom";
import Directory from "../../component/Directory/Directory";

function Home() {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
}

export default Home;
