import React,{useState, useEffect} from 'react';
import axios from 'axios';

export default function GetApiOne() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(rsp => {
            setIsLoading(false)
            setPost(rsp.data)
            setError('')
        })
        .catch(err => {
            setIsLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    }, [])

    return(
        <div className="text-center">
            {isLoading ? "Loading.." : post.title}
            {error ? error : null}
        </div>
    );
}