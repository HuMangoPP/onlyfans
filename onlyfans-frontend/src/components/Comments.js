import Comment from './Comment'
import { MdChatBubble, MdChatBubbleOutline } from 'react-icons/md'
import { useState } from 'react'

const Comments = ( {comments, onShow, onHide }) => {
    const[showComments, setShowComments] = useState(false)

    return (
        <div className='comments-container'>
            <div className="comments-header">
                <h4 >Comments
                <div className='clickable-icons' 
                    onClick={() => {
                        if (showComments) {
                            onHide()
                            setShowComments(false)
                        } else {
                            onShow()
                            setShowComments(true)
                        }
                    }}>
                {showComments ?
                        <MdChatBubble 
                        style={{cursor:'pointer'}}
                        size={28}
                        /> :
                    <MdChatBubbleOutline 
                        style={{cursor:'pointer'}}
                        size={28}
                        />
                }</div>
                </h4>
            </div>
            {showComments ? 
                <div className="comments">
                {comments.map((comment) => (
                <Comment key={comment.id} comment={comment}/>
                ))}
                </div> :
                <></>
            }
        </div>
    )
}

export default Comments