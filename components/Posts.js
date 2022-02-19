import React from 'react'
import Link from 'next/link'

const Posts = () => {
    return (
        <div>
            <h2>my Post lists</h2>
            <div>
                <Link href="/posts/1" >first Post</Link>
            </div>
            <div>
                <Link href="/posts/2" >Second Post</Link>
            </div>
            <div>
                <Link href="/posts/3" >Third Post</Link>
            </div>
            <div>
                <Link href="/posts/4" >Fourth Post</Link>
            </div>
        </div>
    )
}

export default Posts