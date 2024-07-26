import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData);
    
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => {
                    const isAuthor = post && userData ? post.userid === userData.$id : false;
                return (
                    post.status=="active" || isAuthor?(<div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>):null
                )})}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts