
import {Route,Routes} from "react-router-dom";

import Home from "./Components/Home/Home";
import Album from "./Components/Albums/Album";
import Post from "./Components/Post/Post";
import Comment from "./Components/Comments/Comment";
import Page from "./Page/Page";
import Todo from "./Components/todos/Todo";

function App() {
  return (
    <div>
        <Page/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'todos'} element={<Todo/>}/>
            <Route path={'albums'} element={<Album/>}/>
            <Route path={'comments'} element={<Comment/>}>
                <Route path={':postId'} element={<Post/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
