import './App.css';
import Header from './components/Header';
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [showAddPost, setShowAddPost] = useState(false)
  const [backendPosts, setBackendPosts] = useState([])

  useEffect( () => {
    axios.get('http://localhost:5000/posts/all')
      .then(res => {
        setBackendPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [backendPosts])

  // add post
  const addPost = async (post) => {
    const fd = new FormData()
    fd.append('title', post.title)
    fd.append('description', post.description)
    fd.append('image', post.image)
    axios.post('http://localhost:5000/posts/all', fd)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const expandImage = (id) => {
    console.log("expand", id)
  }

  const collapseImage = (id) => {
    console.log("collapse", id)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddPost(!showAddPost)} 
      showAdd={showAddPost}/>

      {showAddPost && <AddPost onAdd={addPost}/>}

      <Posts posts={ backendPosts } 
      onExpand={expandImage} 
      onCollapse={collapseImage}/>
    </div>
  );
}

export default App;
