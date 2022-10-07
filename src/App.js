
import Users from "./components/User/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import MainPage from "./components/Page/Main Page";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/Page/HomePage";

function App() {
  return (
    <div>
      <div>
          <MainPage/>
          <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'users'} element={<Users/>}/>
              <Route path={'posts'} element={<Posts/>}/>
              <Route path={'comments'} element={<Comments/>}/>
          </Routes>
      </div>

    </div>
  );
}

export default App;
