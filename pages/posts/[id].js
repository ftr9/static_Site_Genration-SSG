import React from 'react'

const Post = ({ postData }) => {
    return (
        <div>
            <h2>{postData.title}</h2>
            <p>ID = {postData.id}</p>
            <p>userId = {postData.userId}</p>
            <p>{postData.body}</p >
        </div>
    )
}

export const getStaticPaths = async () => {

    const postsJson = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsList = await postsJson.json();

    const paths = postsList.map(el => {
        return { params: { id: `${el.id}` } }
    });

    return {
        paths: paths,
        fallback: true
    }

}

export const getStaticProps = async (context) => {

    const postsJson = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const postsList = await postsJson.json();

    return {
        props: {
            postData: postsList
        }
    }
}

export default Post