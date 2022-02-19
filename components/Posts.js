import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const LinkButton = ({ postId, title }) => {
    return (
        <div>
            <Link href={`/posts/${postId}`} >{title}</Link>
        </div>
    );
}

const Posts = ({ posts }) => {

    const router = useRouter();

    if (router.isFallback) {
        return <div>LOADING ....</div>
    }

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