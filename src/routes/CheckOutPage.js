import React from 'react'

export default function CheckOutPage() {

  return (

    <main>
      
      <section className="section hero-check-out">
        <div className="hero-banner">   
          <div className="container">
            <div className="row">
              <div className="content">
                <div className="col-12">
                  <div className="section-title">
                    <h1>Квитки на автобус</h1>
                  </div>
                  <div className="section-description">
                    <p>по Україні, Польщі та Європі</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="check-out-info">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-navigation">
                <div className="before">Вибір рейсу</div> <div className="icon ar"></div> <div className="chose">Пасажири</div> <div className="icon ar"></div> <div className="next">Оплата</div>
              </div>
              <div className="cities">
                <div className="from">Львів</div> <div className="icon ar"></div> <div className="to">Варшава</div>
              </div>
              <div className="date-time-price">
                23 лютого у 21:30, 1 дорослий 550 грн.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section check-out">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-xs-12 col-sm-12">
              <div className="left-side-info">

                <div className="issuance-of-a-ticket">
                  <div className="content">
                      <div className="section-title">
                        <h2>Оформлення квитка</h2>
                      </div>
                      <div className="section-name">
                        <div className="row">
                          <div className="col-xl-6 col-xs-12 col-sm-12">
                            <div className="name">
                              <label for="floatingInput">Ім'я</label>
                              <input type="email" class="form-control" id="floatingInput" placeholder="Іван" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-xs-12 col-sm-12">
                            <div className="name">
                              <label for="floatingInput">Прізвище</label>
                              <input type="email" class="form-control" id="floatingInput" placeholder="Іванов" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="seats">
                        <div className="section-title">
                          <h2>Місце в автобусі</h2>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-xs-12 col-sm-12">
                            <div className="setting">
                              <div className="icon chair"></div> <div className="text">Вільна розсадка</div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="information-about-buyer">
                  <div className="content">
                    <div className="section-title">
                      <h2>Інформація про покупця</h2>
                    </div>
                    <div className="section-description">
                      Вказуйте коректні e-mail та номер телефону, тому що вони необхідні для ідентифікації користувача, отримання квитка, можливості авторизації в особистому кабінеті та можливості повернути квиток
                    </div>
                    <div className="section-info">
                        <div className="row">
                          <div className="col-xl-6 col-xs-12 col-sm-12">
                            <div className="name">
                              <label for="floatingInput">E-mail</label>
                              <input type="email" class="form-control" id="floatingInput" placeholder="yourrmail@gmail.com" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-xs-12 col-sm-12">
                            <div className="name">
                              <label for="floatingInput">Телефон</label>
                              <input type="email" class="form-control" id="floatingInput" placeholder="+380" />
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="to-be-paid">
                  <div className="content">
                    <div className="section-title">
                      <div className="title"><h2>До сплати</h2></div><div className="price"><h2>900,00 грн</h2></div>
                    </div>
                    <div className="pay-info">
                      <div className="">Ваші платіжні та особисті дані надійно захищені відповідно до міжнародних стандартів безпеки.</div>
                    </div>
                    <form>
                      <div className="form-group">
                        <input type="checkbox" id="ofetra" />
                        <label for="ofetra"> Я приймаю умови публічної оферти, політики конфіденційності і повернення. </label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="date" />
                        <label for="date">Згода на обробку персональних даних</label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="section-button">
                  <button className="button">
                    Перейти до оплати
                  </button>
                  <div className="safe-block">
                    <div className="icon lock"></div><div className="text">Ваші платіжні та особисті дані надійно захищені.</div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-xl-4 col-xs-12 col-sm-12">
              <div className="right-side-info">

                <div className="about-the-flight">
                  <div className="content">

                    <div className="section-title">
                      <h2>Про рейс</h2>
                    </div>
                    <div className="map-block">
                      <div className="time-and-date">
                        <div className="time">21:50</div>
                        <div className="date">22 лют.</div>
                      </div>
                      <div className="city-and-place">
                        <div className="city-from">Львів</div>
                        <div className="place-from">Зупинка "АЗС WOG", вулиця Богдана Хмельницького; будинок 291</div>
                      </div>
                    </div>

                    <div className="icon-line">
                      <div className="icon ad"></div>
                    </div>

                    <div className="map-block">
                      <div className="time-and-date">
                        <div className="time">05:00</div>
                        <div className="date">23 лют.</div>
                      </div>
                      <div className="city-and-place">
                        <div className="city-from">Варшава</div>
                        <div className="place-from">Автовокзал "Варшава-Заходня", Єрусалимські алеї; будинок 144</div>
                      </div>
                    </div>

                    <div className="ticket-price">
                      <div className="text"><h2>Ціна:</h2></div>
                      <div className="price">900,00 грн.</div>
                    </div>

                    <div className="total-price">
                      <div className="text-type">
                        <div className="text">До сплати</div>
                        <div className="type">(1 дорослий)</div>
                      </div> 
                      <div className="price">900,00 грн.</div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

  )
}
