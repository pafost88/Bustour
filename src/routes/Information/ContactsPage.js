import React from 'react'

export default function ContactsPage() {

  return (

    <main>

      <section className="section contacts-hero">
        <div className="hero-banner">   
          <div className="container">
            <div className="row">
              <div className="content">
                <div className="col-12">
                  <div className="section-title">
                    <div className=""><h2><a href="">Квитки на автобус</a></h2></div> <div className="icon ar"></div><div className=""><h2>Контакти</h2></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contacts-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Контакти</h2>
            </div>
            <div className="col-auto">
            <a href="">
              <div className="contact">
                <div className="icon-block">
                  <div className="icon email"></div>
                </div>
                <div className="title-block">
                  Email
                </div>
              </div>
            </a>
            </div>
            <div className="col-auto">
              <a href="">
                <div className="contact">
                  <div className="icon-block">
                    <div className="icon phone"></div>
                  </div>
                  <div className="title-block">
                    Phone
                  </div>
                </div>
              </a>
            </div>

            <div className="col-auto">
              <a href="">
                <div className="contact">
                  <div className="icon-block">
                    <div className="icon telegram"></div>
                  </div>
                  <div className="title-block">
                    Telegram
                  </div>
                </div>
              </a>
            </div>
            <div className="col-auto">
              <a href="">
                <div className="contact">
                  <div className="icon-block">
                    <div className="icon wapp"></div>
                  </div>
                  <div className="title-block">
                    Wahtsapp
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  
    </main>

  )
}
