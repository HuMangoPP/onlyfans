import { useState } from 'react'
import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs'

const Comment = ({ comment }) => {

    return (
        <>
            <div className='comment-block'>
                <p>{comment.text}</p>
            </div>
        </>)
}

export default Comment