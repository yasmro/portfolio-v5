import {useState} from 'react'
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

import { myself } from '../../data/about'
import Title from "../../components/Title"

const variants = {
    visible: (custom) => ({
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const Contact = (props) => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

    return(
        <>
            <Head>
                <title>Contact - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <Title title="Contact" />
                <div className="container" >
                    <form name="contact" action="/contact/thankyou" method="POST" netlify data-netlify="true" style={{ margin: "0 auto", maxWidth: "540px" }}>
                        <div className="row row-30 g-3">
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="col-md-12 g-3">
                                <div className="md-form mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" className="form-control rounded-0 py-2" onChange={(e) => setName(e.target.value)} id="name" />
                                </div>
                                <div className="md-form mb-3">
                                    <label htmlFor="email" className="d-flex">
                                        <span className="mr-auto">Email</span>
                                        <span className={email==="" || !validateEmail(email) ? "text-danger" : "text-success" }>
                                            {email==="" ? "Empty Email" : !validateEmail(email) ? "Invalid Email" : "Valid Email"}
                                        </span>
                                    </label>
                                    <input type="email" name="email" className="form-control rounded-0 py-2" onChange={(e) => setEmail(e.target.value)} id="email" />
                                </div>
                                <div className="md-form ">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" className="form-control rounded-0 py-2" onChange={(e) => setMessage(e.target.value)} style={{height: "200px"}} id="message"></textarea>
                                </div>
                            </div>

                            <div className="text-center">
                                {/* btn-outline-dark  */}
                                <button type="submit" className={"mt-5 btn btn-lg rounded-0 " + (name==="" || email === "" || message === "" || validateEmail(email) === false ? "btn-light" : "active")} disabled={name==="" || email === "" || message === "" || validateEmail(email) === false} data-ripple-color="dark">Send</button>
                            </div>
                            <div className="status"></div>
                        </div>
                    </form>
               </div>
            </div>
        </>
    )
};

Contact.getInitialProps = async function() {
    return { shows: ""};
};

const validateEmail = (email) => {
    // emailの正規表現
    const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    console.log(regexp.test(email));
    return regexp.test(email) ? true : false;
}

export default Contact;