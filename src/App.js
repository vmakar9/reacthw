import Page from "./components/Page/Page";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/Home Page/HomePage";
import Users from "./components/User/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";


function App() {


  return (<div>
  <Page/>
          <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'users'} element={<Users/>}/>
              <Route path={'posts'} element={<Posts/>}/>
              <Route path={'comments'} element={<Comments/>}/>
          </Routes>
      </div>

  );
}

export default App;
