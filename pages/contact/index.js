import {useState} from 'react'
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from '../../lib'
import fetch from "isomorphic-unfetch";

import { myself } from '../../data/about'
import Title from "../../components/Title"

const Contact = (props) => {

    const validateForm = () => {
        var name =  document.getElementById('name').value;
        if (name == "") {
            document.querySelector('.status').innerHTML = "Name cannot be empty";
            return false;
        }
        var email =  document.getElementById('email').value;
        if (email == "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty";
            return false;
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                document.querySelector('.status').innerHTML = "Email format invalid";
                return false;
            }
        }
        var message =  document.getElementById('message').value;
        if (message == "") {
            document.querySelector('.status').innerHTML = "Message cannot be empty";
            return false;
        }
        document.querySelector('.status').innerHTML = "Sending...";
      }

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
                <div className="container-md">
                    <form name="contact" action="/contact/thankyou" method="POST" netlify data-netlify="true">
                        <div className="row row-30 g-3">
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="col-md-6 g-3">
                                <div className="md-form mb-0">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} id="name" />
                                </div>
                                <div className="md-form mb-0">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="email" />
                                </div>
                            </div>
                            <div className="col-md-6 g-3">
                                <div className="md-form mb-0">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" className="form-control" onChange={(e) => setMessage(e.target.value)} id="message"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" onClick={validateForm} className="mt-5 btn btn-outline-dark btn-lg rounded-0" disabled={name==="" || email === "" || message === ""} data-ripple-color="dark">Send</button>
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

export default Contact;