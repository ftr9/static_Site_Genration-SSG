import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const LinkButton = ({ postId, title }) => {
    return (
        <div>
            <Link href={`/posts/${postId}`} >{title}</Link>
        </div>
    );
}

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postData = await posts.json()
            setPosts(postData);
        })();

    }, []);

    return (
        <div>
            <h2>my Post lists</h2>

            {
                posts.map(el => {
                    return <LinkButton key={el.id} postId={el.id} title={el.title} />
                })
            }
        </div>
    )

}

export default Posts