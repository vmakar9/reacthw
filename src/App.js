import Todo from "./todos/Todo";

import {Link,Route,Routes} from "react-router-dom";
import Home from "./Home/Home";
import Album from "./Albums/Album";
import Post from "./Post/Post";
import Comment from "./Comments/Comment";

function App() {
  return (
    <div>
       <ul>
           <li><Link to={'/'}>Home page</Link></li>
           <li><Link to={'/todos'}>Todos </Link></li>
           <li><Link to={'/albums'}>Albums</Link></li>
           <li><Link to={'/comments'}>Comments</Link></li>
       </ul>
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
