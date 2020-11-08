import fetch from "isomorphic-unfetch";

import { getPostBySlug } from '../../lib'
import ReactMarkdown from 'react-markdown'

const Post = props => (
  <div>
    <h1>{props.show.fields.title}</h1>
    <ReactMarkdown children={props.show.fields.description} />
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </div>
);

Post.getInitialProps = async function(context) {
  
  const { id } = context.query;
  const res2 = await getPostBySlug(id);
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { show: res2};
};

export default Post;