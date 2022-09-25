import Todo from "./todos/Todo";

import {Link,Route,BrowserRouter,Routes} from "react-router-dom";
import Home from "./Home/Home";
import Album from "./Albums/Album";

function App() {
  return (
    <div>
       <ul>
           <li><Link to={'/'}>Home page</Link></li>
           <li><Link to={'/todos'}>Todos </Link></li>
           <li><Link to={'/albums'}>Albums</Link></li>
       </ul>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'todos'} element={<Todo/>}/>
            <Route path={'albums'} element={<Album/>}/>
        </Routes>
    </div>
  );
}

export default App;
