import './App.css';
import Header from './components/Header';
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [showAddPost, setShowAddPost] = useState(false)
  const [posts, setPosts] = useState([
    {
        id: 1,
        title: 'my post',
        description: 'this is my post',
    },
    {
        id: 2,
        title: "a second post",
        description: "this is my second post"
    }
])

  // add post
  const addPost = (post) => {
    const id = Math.floor(Math.random()*10000)+1
    const newPost = {id,...post}
    setPosts([...posts,newPost])
  }

  const getPosts = () => {
    axios.get('/posts').then(response => {
      setPosts([response])
      console.log(response)
    })
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddPost(!showAddPost)} showAdd={showAddPost}/>
      {showAddPost && <AddPost onAdd={addPost}/>}
      <Posts posts={getPosts()}/>
    </div>
  );
}

export default App;
