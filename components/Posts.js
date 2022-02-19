import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const LinkButton = ({ postId, title }) => {
    return (
        <div>
            <Link href={`/posts/${postId}`} >{title}</Link>
        </div>
    );
}

const Posts = ({ posts }) => {

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