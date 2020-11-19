import Router from 'next/router'

export default function Custom404() {
    return(
      <div className="vh-100" style={{ position: "relative"}}>
        <div className="container">
          <div className="row row-30">
            <div className="col-md-6">
              <div className="bg-light h-100 w-100"></div>
            </div>
            <div className="col-md-6 text-center text-md-left">
              <h1 className="display-1">404.</h1>
              <h1 className="display-6">Page Not Found</h1>
              <a onClick={() => Router.back()} className="pt-3 h3">Back</a>
            </div>
          </div>
        </div>
      </div>     
    )
  }