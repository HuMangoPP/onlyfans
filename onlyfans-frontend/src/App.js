import './App.css';
import Header from './components/Header';
import Button from './components/Button'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [showAddPost, setShowAddPost] = useState(false)
  const [backendPosts, setBackendPosts] = useState([])

  const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
  })

  useEffect(() => {
    async function fetchPosts() {
      const request = await instance.get('/posts')
      console.log(request)
      setBackendPosts(request.data.posts)
      return request
    }
    fetchPosts()
  }, [backendPosts])


  // add post
  const addPost = async (post) => {
    // const fd = {
    //   title: post.title,
    //   description: post.description,
    //   image: post.image
    // }
    const fd = new FormData()
    fd.append('title', post.title)
    fd.append('description', post.description)
    fd.append('image', post.image)
    console.log(post)
    instance.post('/posts', fd)
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
    <>
      <Header />

      <section className='new-post'>
        <Button color={showAddPost ? 'grey' : 'steelblue'} text={showAddPost ? 'Close' : 'Create Post'} onClick={() => setShowAddPost(!showAddPost)}/>  
        {showAddPost && <AddPost onAdd={addPost}/>}
      </section>
      <div className="container">

        <Posts posts={ backendPosts } 
        onExpand={expandImage} 
        onCollapse={collapseImage}/>
      </div>
    </>
  );
}

export default App;
