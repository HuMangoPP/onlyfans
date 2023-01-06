import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs'
import Comments from './Comments'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PostImage from './PostImage'

const Post = ({ post, onExpand, onCollapse }) => {

    const[showImg, setShowImg] = useState(false)
    const[backendComments, setBackendComments] = useState([])

    const posts_instance = axios.create({
        baseURL: `http://localhost:5000/api/posts/${post._id}`
    })

    useEffect(() => {
        async function fetchComments() {
            const request = await posts_instance.get('/comments')
            console.log(request)
            setBackendComments(request.data.comments)
            return request
        }

        if (showImg) {
            console.log('show image')
            fetchComments()
        } else {
            setBackendComments([])
        }
    }, [backendComments])

    const expandComments = () => {
        console.log('expand comments on', post._id)
    }

    const collapseComments = () => {
        console.log('collapse comments on', post._id)
    }

    return (
        <>
            <div className='posts-gap'></div> 
            <div className='posts'>
                <h3>{post.title} 
                <div className='clickable-icons'
                    onClick={() => {
                        if (showImg) {
                            onCollapse()
                            setShowImg(false)
                        } else {
                            onExpand()
                            setShowImg(true)
                        }
                    }}>
                {showImg ? 
                    <BsArrowsAngleContract 
                        style={{cursor:'pointer'}}
                        /> :
                    <BsArrowsAngleExpand 
                        style={{cursor:'pointer'}} 
                        />
                }
                </div>
                </h3>
                {showImg ? 
                <>
                    <p>{post.description}</p>
                    <PostImage image={post.image} />
                    <Comments 
                comments={ backendComments }
                onShow = { expandComments }
                onHide = { collapseComments }/>
                </> : <></>}
            </div>
        </>
    )
}

export default Post