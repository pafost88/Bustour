import React from 'react'

import banner from '../../src/assets/images/banner_dotua.svg';

export default function BusPage() {

  return (

    <main>

      <section className="section hero-bus">
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

      <section className="section banner-bus">
        <div className="container">
          <div className="row">
              <div className="col-12">
                <div className="banner">
                  <img src={banner} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="local-time">
                  <h2>Виїзд та прибуття за місцевим часом</h2>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="section ticket-list">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h1>Розклад автобусів CityName - CityName2 на DateNumber MountName</h1>
              </div>
            </div>
          </div>
          <div className="ticket-list-block">
            <div className="no-ticket">
              <div className="content">
                <p>Без роздруковування</p>
              </div>
            </div>
            <div className="content">
              <div className="col-12">
                <div className="row">
                    <div className="col-xl-4 col-xs-12 col-sm-12">
                      <div className="row">
                        <div className="info-block">
                          <div className="col-12">
                            <div className="top-content">
                              <div className="time-block">
                                19:40
                              </div>
                              <div className="date-block">
                                <div className="date">
                                  18 лют.
                                </div>
                              </div>
                              <div className="time-in-road">
                                14 год. 35 хв в дорозі
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="bottom-content">
                              <div className="start-city">
                                Лешно 
                              </div>
                              <div className="start-from">
                                Залізнична станція Лешно, вулиця Дворцова; будинок 1
                              </div>
                            </div>   
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-xl-5 col-xs-12 col-sm-12">
                      <div className="row">
                        <div className="info-block">
                        <div className="col-12">
                            <div className="top-content">
                              <div className="time-block">
                                19:40
                              </div>
                              <div className="date-block">
                                <div className="date">
                                  18 лют.
                                </div>
                              </div>
                              <div className="time-in-road">
                                14 год. 35 хв в дорозі
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="bottom-content">
                              <div className="start-city">
                                Лешно 
                              </div>
                              <div className="start-from">
                                Залізнична станція Лешно, вулиця Дворцова; будинок 1
                              </div>
                            </div>   
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-xs-12 col-sm-12">
                      <div className="ticket-price">
                        <div className="price">
                          <h2>471грн</h2>
                        </div>
                        <div className="buy-button">
                          <button className="button">
                            Обрати
                          </button>
                        </div>
                      </div>
                    </div>
                  <div className="col-12">
                    <div className="ticket-footer">
                      <div className="row">
                        <div className="col-xl-9">
                          <div className="more-info">
                            <div className="driver">Перевізник: KLR Bus</div>
                            <div className="car">Автобус: Van Hool [EL3GU42]</div>  
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="ticket-benefits">
                              <div className="content">
                                <div className="icon wifi"></div>
                                <div className="icon charger"></div>
                                <div className="icon wc"></div>
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
        </div>
      </section>

      <section className="section popular">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="popular-blocks">
                <div className="row">
                  <div className="col-xl-6 col-xs-12 col-sm-12">
                    <div className="popular-list">
                      <div className="content">
                        <div className="section-title">
                          <h2>З міста Лешно</h2>
                        </div>
                        <nav>
                          <ul>
                            <li ><a href="" >Лешно → Львів</a> 1 200,00 грн</li>
                            <li ><a href="" >Лешно → Рівне</a> 1 400,00 грн</li>
                            <li ><a href="" >Лешно → Київ</a> 1 750,00 грн</li>
                            <li ><a href="" >Лешно → Вінниця</a> 1 600,00 грн</li>
                            <li ><a href="" >Лешно → Харків</a> 2 800,00 грн</li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xs-12 col-sm-12">
                    <div className="popular-list">
                      <div className="content">
                        <div className="section-title">
                          <h2>З міста Лешно</h2>
                        </div>
                        <nav>
                          <ul>
                            <li ><a href="" >Лешно → Львів</a> 1 200,00 грн</li>
                            <li ><a href="" >Лешно → Рівне</a> 1 400,00 грн</li>
                            <li ><a href="" >Лешно → Київ</a> 1 750,00 грн</li>
                            <li ><a href="" >Лешно → Вінниця</a> 1 600,00 грн</li>
                            <li ><a href="" >Лешно → Харків</a> 2 800,00 грн</li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xs-12 col-sm-12">
                    <div className="popular-list">
                      <div className="content">
                        <div className="section-title">
                          <h2>З міста Лешно</h2>
                        </div>
                        <nav>
                          <ul>
                            <li ><a href="" >Лешно → Львів</a> 1 200,00 грн</li>
                            <li ><a href="" >Лешно → Рівне</a> 1 400,00 грн</li>
                            <li ><a href="" >Лешно → Київ</a> 1 750,00 грн</li>
                            <li ><a href="" >Лешно → Вінниця</a> 1 600,00 грн</li>
                            <li ><a href="" >Лешно → Харків</a> 2 800,00 грн</li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xs-12 col-sm-12">
                    <div className="popular-list">
                      <div className="content">
                        <div className="section-title">
                          <h2>З міста Лешно</h2>
                        </div>
                        <nav>
                          <ul>
                            <li ><a href="" >Лешно → Львів</a> 1 200,00 грн</li>
                            <li ><a href="" >Лешно → Рівне</a> 1 400,00 грн</li>
                            <li ><a href="" >Лешно → Київ</a> 1 750,00 грн</li>
                            <li ><a href="" >Лешно → Вінниця</a> 1 600,00 грн</li>
                            <li ><a href="" >Лешно → Харків</a> 2 800,00 грн</li>
                          </ul>
                        </nav>
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
