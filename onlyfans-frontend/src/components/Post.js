
const Post = ({ post }) => {

    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
    )
}

export default Post