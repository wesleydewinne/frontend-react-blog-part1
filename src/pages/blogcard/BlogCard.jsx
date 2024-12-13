import React from "react";
import './BlogCard.css'
import { useParams} from "react-router-dom";
import posts from '../constants/data.json';

function BlogPost() {
    console.log(posts);

    return (
        <></>
    );
}


// function BlogCard({ title, subtitle, content, created, author, readTime, comments, shares }) {
//
//     const [blogInfo, setBlogInfo] = useState({});
//     const {} = useParams();
//
//         setBlogInfo(data)
//
//
//
//
//     return (
//         <>
//         <article className="blog-card">
//             <h3 className="title">{title}</h3>
//             <h4 className="subtitle">{subtitle}</h4>
//             <p>geschreven door<em>{author}</em> op <em>{created}</em></p>
//
//             <p className="content">{content}</p>
//             <div>
//                 {readTime} {comments} {shares}
//             </div>
//
//         </article>
//         </>
//     )
// }
//
// export default BlogCard;BlogCard