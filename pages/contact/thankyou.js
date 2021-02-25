import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'

const ContactThankYou = (props) => {
    const sentence = {
        description: {
            'en-US': 'I will confirm your queries and reply to you. Please wait for my reply.',
            'ja': 'お問い合わせいただきありがとうございました！返信内容を確認の上，後日返信させていただきます．'
        },
        moveToHome: {
            'en-US': 'Move to Home',
            'ja': 'ホームへ戻る'
        },
    }

    return(
        <>
            <Head>
                <title>Contact - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <div className="container vh-100">
                    <div className="d-flex center-middle" >
                        <div className="col-12 text-center">
                        <h1 className="display-1">Thank you!</h1>
                        <p className={props.locale==="ja" ? "japanese" : ""}>{sentence.description[props.locale]}</p>
                        <div className="mt-5">
                            <Link href="/" locale={props.locale}>
                                <button type="button" class="btn btn-outline-dark btn-lg rounded-0" data-ripple-color="dark">
                                    <span className={props.locale==="ja" ? "japanese" : ""}>{sentence.moveToHome[props.locale]}</span>
                                    </button>
                            </Link>
                        </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
};

// ContactThankYou.getInitialProps = async function() {
//     return { shows: ""};
// };

export async function getStaticProps ({ locale })  {
    const shows = ""
    return { 
        props: {
            shows,
            locale
        },
    };
};

// export async function getStaticPaths() {

//     const paths =  [
//         { locale: 'en-US' },
//         { locale: 'ja' },
//       ]
    
//     return { paths, fallback: true }
// }

export default ContactThankYou;