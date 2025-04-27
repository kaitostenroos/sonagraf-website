import React, { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router"


function toCamelCase(str) {
    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("");
}

function loadPostComponent(title) {
    const camelTitle = toCamelCase(title);
    const lazyPost = lazy(() => import(`../posts/${camelTitle}`));
    return lazyPost;
}

function Post() {
    const params = useParams();
    const title = params.postTitle;
    console.log("Original title param:", title);

    const DynamicPost = useMemo(() => loadPostComponent(title), [title]);

    return (
        <Suspense fallback={<></>}>
            <DynamicPost />
        </Suspense>
    );
}

export default Post