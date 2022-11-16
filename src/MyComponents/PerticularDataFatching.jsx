import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function PerticularDataFatching() {
    const [post, setpost] = useState({});
    const [id, setid] = useState(1);

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res =>{
        console.log(res);
        setpost(res.data)
      })
      .catch(err=> {
        console.log(err);
      })
    
      return () => {
        console.log('dlfj');
      }
    }, [id])
    
  return (
    <div>
        <input type="text" value={id} onChange={e=>setid(e.target.value)} />
            <ul>
                
            <li key={post.id}>{post.title}</li>
                  
            </ul>
      
    </div>
  )
}
