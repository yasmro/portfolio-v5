import {useState} from 'react'
import Head from "next/head";
import Router from 'next/router'

// import Title from "../../components/Title"
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'

const Title = dynamic(
  () => import('../../components/Title'),
  { loading: () => <div><h1>LOADING</h1></div>}
)

import { motion, AnimatePresence } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: 5, duration: 2},
    visible: { opacity: 1, y: 0, duration: 2 },
    hide: { opacity: 0, y: 5, duration: 2},
    transition: { duration: 2 }
  }

const Contact = (props) => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

      const router = useRouter();
      const { locale, locales, defaultLocale } = router

      const sentence = {
          description: {
              'en-US': 'Thank you for visiting my portfolio site! If you are interesting in my works, please contact me freely! :)',
              'ja': 'ご覧いただきありがとうございました！もし作品にご興味ありましたら、下記フォームよりお問い合わせください！'
          },
          ctaSentence: {
              'en-US': 'Move to Google Form',
              'ja': 'Googleフォームへ移動'
          },
          nameLabel:{
            'en-US': 'Name',
            'ja': 'お名前'
          },
          emailLabel:{
            'en-US': 'Email',
            'ja': 'メールアドレス'
          },
          messageLabel:{
            'en-US': 'message',
            'ja': 'お問い合わせ内容'
          }
      }

    return(
        <>
            <Head>
                <title>Contact - Yu Ohno's site 2020</title>
            </Head>
            <div>
                <Title title="Contact" />
                <motion.div custom={0} initial="hidden" animate="visible" transition="transition" variants={variants} className="container" >
                    <div style={{ margin: "0 auto", padding:"100px 0", maxWidth: "540px" }}>
                        <p className={locale==="ja" ? "japanese" : ""}>{sentence.description[locale]}</p>   
                        <div className="text-center">
                            <a className="btn btn-lg rounded-0 active font-weight-bold" href="https://forms.gle/NSFgtwSNZqhtZXtn9">
                                <span className={locale==="ja" ? "japanese" : ""}>{sentence.ctaSentence[locale]}</span>
                            </a>
                        </div>
                    </div>
                    {/* <form name="contact" action="/contact/thankyou" method="POST" netlify data-netlify="true" style={{ margin: "0 auto", maxWidth: "540px" }}> */}
                    {/* <form name="contact"  action="/contact/thankyou" method="POST" netlify data-netlify="true" onSubmit={handleOnSubmit} style={{ margin: "0 auto", maxWidth: "540px" }}>
                        <div className="row row-30 g-3">
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="col-md-12 g-3">
                                <div className="md-form mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" value={name} className="form-control rounded-0 py-2" onChange={(e) => setName(e.target.value)} id="name" />
                                </div>
                                <div className="md-form mb-3">
                                    <label htmlFor="email" className="d-flex">
                                        <span className="mr-auto">Email</span>
                                        <span className={email==="" || !validateEmail(email) ? "text-danger" : "text-success" }>
                                            {email==="" ? "Empty Email" : !validateEmail(email) ? "Invalid Email" : "Valid Email"}
                                        </span>
                                    </label>
                                    <input type="email" name="email" value={email} className="form-control rounded-0 py-2" onChange={(e) => setEmail(e.target.value)} id="email" />
                                </div>
                                <div className="md-form ">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" value={message} className="form-control rounded-0 py-2" onChange={(e) => setMessage(e.target.value)} style={{height: "200px"}} id="message"></textarea>
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className={"mt-5 btn btn-lg rounded-0 " + (name==="" || email === "" || message === "" || validateEmail(email) === false ? "btn-light" : "active")} disabled={name==="" || email === "" || message === "" || validateEmail(email) === false} data-ripple-color="dark">
                                    <i className="far fa-paper-plane mr-2"></i>
                                    <span className="">Send</span>
                                </button>
                            </div>
                            <div className="status" id="status"></div>
                        </div>
                    </form> */}
               </motion.div>
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
    return regexp.test(email) ? true : false;
}

const handleOnSubmit = async (e) => {
    e.preventDefault();
    var bodyData = {name: document.getElementById('name').value, email: email.value, message: message.value};
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
      mode: 'cors',
    })
    const text = await res.text()
    if(text==='Message sent successfully.'){
        Router.push({pathname: '/contact/thankyou'})
    }else{
        document.getElementById('status').innerHTML = text;
    }
  }

export default Contact;