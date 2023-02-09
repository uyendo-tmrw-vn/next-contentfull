import { usePosts } from '@/components/custom-hooks';
import Link from 'next/link';
import React from 'react';


const Posts = () => {
    const [posts, isLoading] = usePosts();

    console.log({ posts });

    // const renderPosts = () => {
    //     if (isLoading) return <p>Loading...</p>;

    //     return posts.map((post, index) => (
    //         <Link
    //             key={index}
    //             href={'post/' + post.fields.slug}
    //             className="posts__post"
    //         >
    //             <div className="posts__post__img__container flex items-center">
    //                 <img
    //                     className="posts__post__img__container__img"
    //                     src={post.fields.featuredImage.fields.file.url}
    //                     alt={post.fields.title}
    //                 />
    //             </div>
    //             <div className="posts__post__text">
    //                 <small>{post.fields.date}</small>
    //                 <h3>{post.fields.title}</h3>
    //                 <p className='py-[1rem]'>{post.fields.description}</p>
    //             </div>
    //         </Link>
    //     ));
    // };

    return (
        <div className="posts__container">
            <h2 className='text-center text-[3rem] mt-[3rem] mb-[2rem]'>Articles</h2>

            {/* <div className="posts">{renderPosts()}</div> */}

            <div className="posts">
                {
                    posts.map((post, index) => (
                        <Link
                            key={index}
                            href={'post/' + post.fields.slug}
                            className="posts__post"
                        >
                            <div className="posts__post__img__container flex items-center">
                                <img
                                    className="posts__post__img__container__img"
                                    src={post.fields.picture[0].fields.file.url}
                                    alt={post.fields.name}
                                />
                            </div>
                            <div className="posts__post__text">
                                <h3>{post.fields.name}</h3>
                                <p className='py-[1rem]'>{post.fields.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};
export default Posts
