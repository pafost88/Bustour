import React from 'react'

export default function PreordersPage() {

  return (

    <main>

      <section className="section hero-preorders">
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

      <section className="preoder-info">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-navigation">
                <div className="chose">Вибір рейсу</div> <div className="icon ar"></div> <div className="next">Пасажири</div> <div className="icon ar"></div> <div className="next">Оплата</div>
              </div>
              <div className="cities">
                <div className="from">Львів</div> <div className="icon ar"></div> <div className="to">Варшава</div>
              </div>
              <div className="row">
                <div className="col-xl-8 col-xs-12 col-sm-12">
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
                  <div className="more-info">
                    Рейс № AKK 001 Чернівці - Лодзь, за маршрутом Львів — Варшавана 22 лютого 2023 року о 21:50
                  </div>
                  <div className="flight-type">
                    Тип рейсу: Регулярний
                  </div>
                </div>
                <div className="col-xl-4 col-xs-12 col-sm-12">
                  <div className="benefits-block">
                    <div className="benefits-title">Додатково</div>
                    <div className="block-icon"><div className="icon wifi"></div>Wi-Fi</div>
                    <div className="block-icon"><div className="icon charger"></div>Розетки 220в</div>
                    <div className="block-icon"><div className="icon wc"></div>Вбиральня</div>
                  </div>
                  <div className="rating-block">
                    Рейтинг <span className="red">3.2</span>  з <span className="red">5</span>
                  </div>
                  <div className="main-info">
                    <div className="driver">Перевізник:</div>
                    <div className="driver-com">Перевізник: TocoBus</div>
                    <div className="driver-bus">Автобус: Van Hool</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="preorder-ticket">
        <div className="container">
          <div className="row">
            <div className="col-12">
                <div className="preoder-block">
                  <div className="content">
                    <div className="section-title">
                      <h2>Виберіть квиток</h2>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-xs-12 col-sm-12">
                        <div className="ticket-block">
                          <div className="ticket-name">
                            <h2>Standart</h2>
                          </div>
                          <div className="available-seats">
                            <div>
                              <h2>
                                На рейсі залишилося 15 місць
                              </h2>
                            </div> 
                            <div className="benefits">
                              <div className="benefits-title"></div>
                              <div className="icon wifi"></div>
                              <div className="icon charger"></div>
                              <div className="icon wc"></div>
                            </div>
                          </div>
                          <div className="buy-button">
                            <button className="button">
                              Обрати
                            </button>
                            <div className="price">
                              360 грн.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hr-block">
                        <hr  className="selector"/>
                      </div>
                      <div className="col-xl-6 col-xs-12 col-sm-12">
                        <div className="ticket-block">
                          <div className="ticket-name">
                            <h2>Premium</h2> <div className="icon premium"></div>
                          </div>
                          <div className="available-seats">
                            <div>
                              <h2>
                                На рейсі залишилося 8 місць
                              </h2>
                            </div> 
                            <div className="benefits">
                              <div className="benefits-title"></div>
                              <div className="icon wifi"></div>
                              <div className="icon charger"></div>
                              <div className="icon wc"></div>
                            </div>
                          </div>
                          <div className="premium-benefits">
                            <div className="benefits-title"></div>
                            <div className="benf"><div className="icon wine"></div>Напої, вода у дорозі</div>
                            <div className="benf"><div className="icon monitor"></div>Відео-монітор для пасажира</div>
                          </div>
                          <div className="buy-button">
                            <button className="button">
                              Обрати
                            </button>
                            <div className="price">
                              860 грн.
                            </div>
                          </div>
                        </div>
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
