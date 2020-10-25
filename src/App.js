import FetchedPosts from "./components/FetchedPosts"
import Posts from "./components/Posts"
import PostForm from  "./components/PostForm"
import { useSelector } from "react-redux"

function App() {
  const alertText = useSelector(state => state.app.alertText)
  const alertType = useSelector(state => state.app.alertType)
  return (
    <div className="container pt-3">
      { alertText && <div className={`alert alert-${alertType}`} role="alert">
          {alertText}
        </div>
      }
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync posts</h2>
          <Posts/>
        </div>
        <div className="col">
        <h2>Async posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
