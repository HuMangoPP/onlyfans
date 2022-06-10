import Post from './Post'

const Posts = ({ posts }) => {
    
    return (
        <>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Posts