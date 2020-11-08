import Link from "next/link";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
import Button from '@material-ui/core/Button';
import { getAllPosts } from '../lib'
import fetch from "isomorphic-unfetch";

const Index = (props) => {
    return(
        <div>
            <h1>Top</h1>
            
            <Button variant="contained" color="primary">
                Hello World
            </Button>
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