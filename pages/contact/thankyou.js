import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

const ContactThankYou = (props) => {
    return(
        <>
            <Head>
                <title>Contact - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <div className="container mt-5">
                    <div className="row row-30">
                        <div className="col-md-6">
                        <div className="bg-light h-100 w-100"></div>
                        </div>
                        <div className="col-md-6 text-center text-md-left">
                        <h1 className="display-1">Thank you!</h1>
                        <p>I will confirm your queries and reply to you. Please wait for my reply.</p>
                        <div className="mt-5">
                            <Link href="/">
                                <button type="button" class="btn btn-outline-dark btn-lg rounded-0" data-ripple-color="dark">Move to Home</button>
                            </Link>
                        </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
};

ContactThankYou.getInitialProps = async function() {
    return { shows: ""};
};

export default ContactThankYou;