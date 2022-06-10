import './App.css';
import Header from './components/Header';
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import { useState, useEffect } from 'react'

function App() {
  const [showAddPost, setShowAddPost] = useState(false)
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
      description: post.description,
      image: post.file
    }
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
