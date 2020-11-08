import Link from "next/link";
import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

const Index = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Works</h1>
            <ul>
            {props.shows ? 
                props.shows.map((show, idx) => (
                <li key={idx}>
                    <Link href="/works/[id]" as={`/works/${idx}`}>
                    <a>{show.fields.title}</a>
                    </Link>
                </li>
            )) : <h1>null</h1>}
            </ul>
        </div>
    )
};

Index.getInitialProps = async function() {
    console.log(process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman")
    const res2 = await getAllPosts();
    console.log(res2)
    // console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: res2};
};

export default Index;