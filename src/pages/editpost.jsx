import React,{useEffect,useState} from 'react'
import { Container,Postform } from '../components'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';
function Editpost() {
    const [post,setposts]=useState([]);
    const {slug} = useParams();
    const navigate =useNavigate()
    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setposts(post);
                }
                else{
                    navigate('/');
                }
            })
        }
    },[slug,navigate])
  return(
    post ? (
        <div className="py-8">
            <Container>
                <Postform post={post}/>
            </Container>
        </div>
    ):null
  )
}

export default Editpost
