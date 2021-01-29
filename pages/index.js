import Head from "next/head"
import Link from "next/link";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
// import Button from '@material-ui/core/Button';
import { getAllPosts, getData } from '../lib'
// import fetch from "isomorphic-unfetch";

import { myself } from '../data/about'

import HomeJumbotron from '../components/HomeJumbotron'

const Index = (props) => {
    return(
        <>
            <Head>
            <title>Home - Yu Ohno's site 2020</title>
            </Head>
            <div style={{ marginBottom: "-96px"}}>
                <HomeJumbotron name={myself.name} quickWord={myself.quickWord}/>                
            </div>
        </>
    )
};

Index.getInitialProps = async function() {
    // const res2 = await getAllPosts();
    // const resWhatICanDo = await getData("whatICanDo","fields.order");
    return { res: ""};
};

export default Index;