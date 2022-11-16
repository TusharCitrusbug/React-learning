import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function DataFetching() {
    const [post, setpost] = useState([]);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
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
    }, [])
    
  return (
    <div>
        
            <ul>
                {
                    post.map(p =>(
                        <li key={p.id}>{p.title}</li>
                    ))
                }
            </ul>
      
    </div>
  )
}
