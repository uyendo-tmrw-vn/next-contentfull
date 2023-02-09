import React, { useEffect, useMemo } from "react";
import MD from "react-markdown";
import Link from "next/link";
import { useSinglePost } from "@/components/custom-hooks";
import { useRouter } from "next/router";


const SinglePost = () => {
    const { slug } = useRouter();
    const [post, isLoading] = useSinglePost(slug);

    useEffect(() => {
        console.log({ post });
    }, [post])


    const renderPost = () => {
        if (isLoading) return <p>Loading...</p>;

        return (
            <React.Fragment>
                <div className="post__intro">
                    <h2 className="post__intro__title">{post.title}</h2>
                    <small className="post__intro__date">{post.date}</small>
                    <p className="post__intro__desc">{post.description}</p>

                    <img
                        className="post__intro__img"
                        src={post.featuredImage.fields.file.url}
                        alt={post.title}
                    />
                </div>

                <div className="post__body">
                    <MD source={post.body} />
                </div>
            </React.Fragment>
        );
    };

    return (
        <div className="post">
            <Link className="post__back" href="/">
                {"< Back"}
            </Link>

            {/* {renderPost()} */}
            {/* {
                post &&
                <div className="post__intro">
                    <h2 className="post__intro__title">{post.title}</h2>
                    <small className="post__intro__date">{post.date}</small>
                    <p className="post__intro__desc">{post.description}</p>

                    <img
                        className="post__intro__img"
                        src={post.featuredImage.fields.file.url}
                        alt={post.title}
                    />
                </div>
                <div className="post__body">
                    <MD source={post.body} />
                </div>
            } */}
        </div>
    );
}
export default SinglePost