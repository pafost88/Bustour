import React from 'react'

import maestro from '../../assets/images/footer/maestro.svg';
import mastercard from '../../assets/images/footer/mastercard.svg';
import uafavorit from '../../assets/images/footer/uafavorit.webp';
import uaprize from '../../assets/images/footer/uaprize.webp';
import visa from '../../assets/images/footer/visa.svg';
import vuso from '../../assets/images/footer/vuso.svg';

import appstore from '../../assets/images/footer/app-store-logo.png';
import playmarket from '../../assets/images/footer/play-market-logo.png';

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="image-section">
                
              <div className="row">
                <div className="col-xl-2 col-4">
                  <div className="reach">
                    <img src={maestro} alt="Maestro" />
                  </div>
                </div>
                <div className="col-xl-2 col-4">
                  <div className="reach">
                    <img src={visa} alt="Maestro" />
                  </div>
                </div>
                <div className="col-xl-2 col-4">
                  <div className="reach">
                    <img src={uafavorit} alt="Maestro" />
                  </div>
                </div>
                <div className="col-xl-2 col-4">
                  <div className="reach">
                    <img src={uaprize} alt="Maestro" />
                  </div>
                </div>
                <div className="col-xl-2 col-4">
                  <div className="reach">
                    <img src={vuso} alt="Maestro" />
                  </div>
                </div>
                <div className="col-xl-2 col-4">
                  <div className="reach">
                    <img src={mastercard} alt="Maestro" />
                  </div>
                </div>
              </div>

            </div>
          </div>




          <div className="col-xl-6 col-xs-12 col-sm-12">
            <div className="row">
              <div className="col-xl-4 col-xs-12 col-sm-12">
                <div className="links-block">
                  <div className="section-title">
                    <h2>Інформація</h2>
                  </div>
                  <ul>
                    <li ><a href="/about">Про нас</a></li>
                    <li ><a href="/faq">Питання та відповіді</a></li>
                    <li ><a href="/support">Повернути квитки</a></li>
                    <li ><a href="/blog">Блог</a></li>
                    <li ><a href="/contacts">Контакти</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-xs-12 col-sm-12">
                <div className="links-block">
                  <div className="section-title">
                    <h2>Партнерам</h2>
                  </div>
                  <ul>
                    <li ><a href="/">Перевізникам</a></li>
                    <li ><a href="/">Агентам</a></li>
                    <li ><a href="/">Партнерська програма</a></li>
                    <li ><a href="/">Автобусні перевізники</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-xs-12 col-sm-12">
                <div className="links-block">
                  <div className="section-title">
                    <h2>Документи</h2>
                  </div>
                  <ul>
                    <li ><a href="/agreement">Договір оферти</a></li>
                    <li ><a href="/personal-data">Політика конфіденційності</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xs-12 col-sm-12">
            <div className="row">
              <div className="col-12">
                <div className="mobile-app">
                  <div className="section-title">
                    <h2>Мобільний додаток</h2>
                  </div>
                  <div className="apps">
                    <a href=""><img src={appstore} alt="App Store" /></a>   
                    <a href=""><img src={playmarket} alt="Play Market" /></a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="bottom-info">
              <div className="section-info">
                © 2023, Busfor. Онлайн-сервіс із продажу квитків. Усі права захищені
              </div>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  )
  
}
