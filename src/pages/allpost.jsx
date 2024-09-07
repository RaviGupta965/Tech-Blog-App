import React ,{useState,useEffect} from 'react'
import { Container , Postcard } from '../components'
import service from '../appwrite/config.js'
function AllPost() {
    const [post,setpost]=useState([]);
    useEffect(()=>{
        service.getPosts([]).then((posts)=>{
            if(posts){
                setpost(posts.documents)
            }
        })
    },[])
  return (
    <div className='w-y py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {post.map((item)=>(
            <div key={post.$id} className='p-2 w-1/4'>
                <Postcard post={post}/>
            </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
