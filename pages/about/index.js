import Link from "next/link";
import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

const About = (props) => {
    console.log(props)
    return(
        <div>
            <h1>About</h1>
            s
        </div>
    )
};

About.getInitialProps = async function() {
    const res2 = await getAllPosts();
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res2};
};

export default About;