import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from '../../lib'
import ReactMarkdown from 'react-markdown'

const Post = props => (
  <div>
    <h1>{props.show.fields.title}</h1>
    <ReactMarkdown children={props.show.fields.description} />
    {props.show.image ? <img src={props.show.image.medium} /> : null}

    <div>
    <ul>
            {props.shows ? 
                props.shows.map((show, idx) => (
                <li key={idx}>
                    <Link href="/works/[id]" as={`/works/${show.fields.slug}`}>
                        <a>{show.fields.title}</a>
                    </Link>
                </li>
            )) : <h1>null</h1>}
            </ul>
      <Link href="/works">
        <a>Back</a>
      </Link>
    </div>
  </div>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await getAllPosts();
  const res2 = await getPostBySlug(id);
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res, show: res2};
};

export default Post;