import React from 'react'
import aboutbanner from '../../../src/assets/images/about-banner.svg';

export default function AboutPage() {

  return (

    <main>
      
      <section className="section hero-about">
        <div className="hero-banner">   
          <div className="container">
            <div className="row">
              <div className="content">
                <div className="col-12">
                  <div className="section-title-m">
                    <h2>Про компанію Busfor</h2>
                  </div>
                  <div className="section-description">
                    <p>Перший онлайн-сервіс, що напряму поєднує пасажирів та автобусних перевізників.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Наша мета</h2>
              </div>
              <div className="section-description">
                <p>Busfor прагне надавати своїм клієнтам простий і зручний сервіс для пошуку та придбання дешевих квитків на автобуси. В режимі онлайн наші користувачі можуть переглядати всі доступні варіанти поїздки та легко оплачувати квитки банківською карткою на сервісі Busfor, готівкою кур’єру або у відділеннях «Нова Пошта», у терміналах або касах партнерів.</p>
              </div>
            </div>
            <div className="col-12">
              <div className="section-title">
                <h2>Наші технології</h2>
              </div>
              <div className="section-description">
                <p>Busfor працює на базі власної розробки - технології GDS. Це інноваційна система дистрибуції та продажу автобусних квитків. Перевізники успішно використовують нашу технологію, щоб оперативно розміщувати вільні місця на своїх автобусних рейсах для продажу клієнтам онлайн. До GDS також підключені автовокзали та автостанції, що зацікавлені у підвищенні якості своїх послуг, надаючи пасажирам можливість купувати автобусні квитки онлайн на сервісі Busfor.</p>
              </div>
            </div>
            <div className="col-xl-4 col-xs-12 col-sm-12">
              <div className="section-title">
                <h2>Наші ціни</h2>
              </div>
              <div className="section-description">
                <p>Ціни на квитки, зазвичай, встановлюють самі перевізники. Busfor завжди намагається надавати своїм клієнтам мінімальну вартість квитків за ціною, як на автовокзалі. В результатах пошуку відображаються автобусні рейси в різних цінових категоріях, серед яких клієнти можуть обрати найдешевший квиток.</p>
              </div>
            </div>
            <div className="col-xl-4 col-xs-12 col-sm-12">
              <div className="section-title">
                <h2>Наш сервіс</h2>
              </div>
              <div className="section-description">
                <p>Busfor не є перевізником, але ми докладаємо зусилля, щоб забезпечити максимальний комфорт під час поїздки та повагу до всіх наших клієнтів. Ми намагаємось взаємодіяти з перевізниками з питань якості обслуговування та пунктуальності, а також боремось за комфортну подорож для кожного нашого клієнта.</p>
              </div>
            </div>
            <div className="col-xl-4 col-xs-12 col-sm-12">
              <div className="section-title">
                <h2>Місія Busfor</h2>
              </div>
              <div className="section-description">
                <p>Ми прагнемо змінити ринок автобусних перевезень і привести його до європейських стандартів якості обслуговування пасажирів.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-banner">
        <div className="row">
          <div className="col-12">
            <img src={aboutbanner} alt="" />
          </div>
        </div>
      </section>

      <section className="section about-contacts">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Контакти </h2>
              </div>
              <div className="section-description">
                <p>03056, м. Київ, вул. Польова 21, Товариство з обмеженою відповідальністю «І-Тревелс», Будні, з 10 до 19, Телефони +380 (44) 502-88-89, +380 (50) 450-65-78, +380 (67) 351-37-34, +380 (93) 170-16-57, e-mail: help@busfor.ua</p>
              </div>
              <div className="section-description-more">
                <p>Прийом пасажирів в офісі не здійснюється</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

  )
}
