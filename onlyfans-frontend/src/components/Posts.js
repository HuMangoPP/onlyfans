import Post from './Post'

const Posts = ({ posts }) => {
    
    const displayPosts = posts.slice(0).reverse()

    return (
        <>
            {displayPosts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Posts