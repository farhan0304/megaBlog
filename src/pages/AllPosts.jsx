import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import spinner from '../assets/spinnertransparent.svg'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loader,setLoader] = useState(false)
    const userData = useSelector((state) => state.auth.userData);
    
    useEffect(() => {
        setLoader(true)
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoader(false)
        })
    }, [])
    
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
            {loader && <img className='block mx-auto' src={spinner} alt="loading..." />}
            </Container>
    </div>
  )
}

export default AllPosts