import './App.css';
import Header from './components/Header';
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import { useState, useEffect } from 'react'
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

  const [backendPosts, setBackendPosts] = useState([{}])

  useEffect( () => { fetch('/posts/all').then(
        response => response.json()
      ).then(
        data => {
          setBackendPosts(data)
        }
      )
  }, [])

  // add post
  const addPost = async (post) => {
    const newPost = {
      title: post.title,
      description: post.description
    }
    console.log(post)
    const result = await fetch('/posts/all', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })

    const jsonResult = await result.json()
    setBackendPosts([...backendPosts, jsonResult])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddPost(!showAddPost)} showAdd={showAddPost}/>
      {showAddPost && <AddPost onAdd={addPost}/>}
      <Posts posts={backendPosts}/>
    </div>
  );
}

export default App;
