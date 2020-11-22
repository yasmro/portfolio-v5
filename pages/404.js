import Router from 'next/router'
import Image from 'next/image'

export default function Custom404() {
    return(
      <div className="position-relative">
        <div className="container mt-5">
          <div className="row row-30">
            <div className="col-md-6">
              <div className="bg-light h-100 w-100">
                <Image src="/static/images/notFound.jpg" loading="lazy" alt="404 NotFound" width={660} height={660} />
              </div>
            </div>
            <div className="col-md-6 text-center text-md-left g-5">
              <h1 className="display-1">404.</h1>
              <h1 className="display-6">Page Not Found</h1>
              <div className="mt-5">
                <button type="button" className="btn btn-outline-dark btn-lg rounded-0" onClick={() => Router.back()}  data-ripple-color="dark">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>     
    )
  }