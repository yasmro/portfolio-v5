import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

import { myself } from '../../data/about'
import Title from "../../components/Title"

const ContactThankYou = (props) => {
    return(
        <>
            <Head>
                <title>Contact - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <Title title="Thank you!" />
                <div className="container">
                    <h1>Thank you!</h1>
               </div>
            </div>
        </>
    )
};

ContactThankYou.getInitialProps = async function() {
    return { shows: ""};
};

export default ContactThankYou;