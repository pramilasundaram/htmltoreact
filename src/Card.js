import React from 'react'


export default function Card({ data }) {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {data.title}
            </h5>
  
            <h6 className="card-price text-center">
              {data.price}
              <span className="period">/month</span>
            </h6>
            <hr />
  
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {data.title === "FREE" ? (
                  <span>{data.user}</span>
                ) : (
                  <strong>{data.user}</strong>
                )}
              </li>
  
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {data.storage}
              </li>
  
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {data.publicproject}
              </li>
  
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {data.access}
              </li>
  
              {data.title === "FREE" ? (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {data.privateproject}
                </li>
              ) : (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {data.privateproject}
                </li>
              )}
  
              {data.title === "FREE" ? (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {data.support}
                </li>
              ) : (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {data.support}
                </li>
              )}
  
              {data.title === "FREE" ? (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {data.subdomain}
                </li>
              ) : (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {data.title === "PRO" ? (
                    <span>
                      <strong>Unlimited</strong>
                      {data.subdomain}
                    </span>
                  ) : (
                    <span>{data.subdomain}</span>
                  )}
                </li>
              )}
  
              {data.title === "PRO" ? (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {data.status}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {data.status}
                </li>
              )}
            </ul>
  
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  


