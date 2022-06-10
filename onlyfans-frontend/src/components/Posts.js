import Post from './Post'

const Posts = ({ posts, onExpand, onCollapse}) => {
    
    const displayPosts = posts.slice(0).reverse()

    return (
        <>
            {displayPosts.map((post) => (
                <Post key={post.id} post={post} 
                onExpand={onExpand} 
                onCollapse={onCollapse}/>
            ))}
        </>
    )
}

export default Posts