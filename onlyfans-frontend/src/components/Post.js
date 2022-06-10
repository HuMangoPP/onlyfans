import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs'
import { useState } from 'react'

const Post = ({ post, onExpand, onCollapse }) => {

    const[showImg, setShowImg] = useState(false)

    return (
        <div className='posts'>
            <h3 style={{cursor:'pointer'}}>{post.title} 
            {showImg ? 
            <BsArrowsAngleContract 
                style={{cursor:'pointer'}}
                onClick={() => {
                    onCollapse(post._id)
                    setShowImg(false)
                }}
                /> :
            <BsArrowsAngleExpand 
                style={{cursor:'pointer'}
                } 
                onClick={() => {
                    onExpand(post._id)
                    setShowImg(true)
                }}/>}
            </h3>
            <p>{post.description}</p>
        </div>
    )
}

export default Post