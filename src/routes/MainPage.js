import React from 'react'

import banner from '../../src/assets/images/banner_dotua.svg';

export default function MainPage() {

  return (

    <main>



      <section className="section hero">
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
      
      <section className="section benefits">
        <div className="container">
          <div className="row">
              <div className="col-3">
                <div className="benefits-block">
                  <div className="icon clock"></div>
                  <h2>Без кас та черг</h2>
                  <p>Квитки онлайн у будь-який час на сайті та в додатку</p>
                </div>
              </div>
              <div className="col-3">
                <div className="benefits-block">
                  <div className="icon notebook"></div>
                  <h2>50 000 напрямків</h2>
                  <p>Рейтинг рейсів перевізників за відгуками пасажирів</p>
                </div>
              </div>
              <div className="col-3">
                <div className="benefits-block">
                  <div className="icon calendar"></div>
                  <h2>Безпечна оплата</h2>
                  <p>Стандарти безпеки PCI DSS для захисту платіжних даних</p>
                </div>
              </div>
              <div className="col-3">
                <div className="benefits-block">
                  <div className="icon call"></div>
                  <h2>Повернення квитків</h2>
                  <p>Швидке повернення в особистому кабінеті</p>
                </div>
              </div>
              <div className="col-12">
                <div className="banner">
                  <img src={banner} alt="" />
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="section info-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-block">
                <h1>Чому обирають Busfor</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="section-title">
                <h2>Купити квиток на автобус онлайн просто</h2>
              </div>
              <div className="section-text">
                <p>Коли потрібно відправитися в інше місто на автобусі, найменше хочеться їхати на галасливий автовокзал, щоб там купити квитки на автобус. Онлайн через Інтернет це зробити значно легше. Окрім того, при замовленні на вокзалі транспортний засіб, на якому вам доведеться їхати, напевно стане для вас несподіванкою – у вас навряд чи буде час вибрати його модель перед вікном каси.</p>
                <p>Busfor.ua – це зручна система безкоштовного бронювання і простого викупу квитків. Після бронювання, ви зможете придбати білети на автобус будь-яким зручним способом.</p>
                <p>Здійснюючи бронювання квитків на автобус онлайн, ви резервуєте місце в автобусі нашого партнера-перевізника, який моментально закріплює його за вами. Після оплати замовлення, ви можете з упевненістю відправлятися на посадку. При посадці вам лише потрібно показати водієві роздрукований квиток на підтвердження, що саме ви замовили місце. Щоб роздрукувати квиток, знадобиться звичайний принтер.</p>
                <p>Замовляйте автобусні квитки онлайн – це комфортно і надійно.</p>
              </div>
            </div>
            <div className="col-4">
              <div className="section-title">
                <h2>Квитки на автобус бронюються безкоштовно</h2>
              </div>
              <div className="section-text">
                <p>За допомогою нашої системи пошуку рейсів ви зможете вибрати потрібний напрямок, маршрут і навіть підібрати певний автобус. Квитки на потрібну дату ви без зусиль знайдете за допомогою поля пошуку на сайті Busfor.ua.</p>
                <p>Наша система дає змогу безкоштовно забронювати білети на автобус онлайн, а потім викупити їх найбільш зручним способом.</p>
                <p>Перш, ніж купити білет на автобус, радимо ознайомитися з усіма пропозиціями від перевізників. Тут завжди можна вибрати оптимальний для себе варіант за ціною і умовами поїздки: від економ-класу до автобусів з VIP обслуговуванням за розумну ціну.</p>
                <p>Замовлення квитків на автобус забере у вас буквально 2 хвилини. В результаті ви отримаєте SMS з номером бронювання на свій мобільний телефон. За допомогою цього номера, ви зможете викупити квиток протягом зазначеного терміну в розділі "Мої квитки" на сайті або в Центрі обслуговування клієнтів.</p>
              </div>
            </div>
            <div className="col-4">
              <div className="section-title">
                <h2>Квитки на автобус легко повернути</h2>
              </div>
              <div className="section-text">
                <p>На сайті BUSFOR не тільки просто купити білет на автобус онлайн, але і просто його повернути. Повернення квитка здійснюється згідно з державною постановою КМУ «Правила надання послуг пасажирського автомобільного транспорту», а також згідно з умовами кожного перевізника.</p>
                <p>Повернути невикористані автобусні квитки ви можете через Центр обслуговування клієнтів. Кошти за невикористаний квиток будуть зараховані протягом 30 днів.</p>
                <p>Умови повернення коштів у кожного перевізника різняться, тому варто уточнювати цю інформацію.</p>
                <p>Дізнатися докладніше про умови повернення можна в Центрі обслуговування клієнтів, там же можна і купити квиток на автобус</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cities">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="available-block">
                <div className="section-title">
                  <h2>Країни</h2>
                </div>
                <nav>
                  <ul>
                    <li ><a href="" >Польща</a></li>
                    <li ><a href="" >Німеччина</a></li>
                    <li ><a href="" >Чехія</a></li>
                    <li ><a href="" >Литва</a></li>
                    <li ><a href="" >Латвія</a></li>
                    <li ><a href="" >Естонія</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-3">
              <div className="available-block">
                <div className="section-title">
                  <h2>Розклад</h2>
                </div>
                <nav>
                  <ul>
                    <li ><a href="" >Київ</a></li>
                    <li ><a href="" >Дніпро</a></li>
                    <li ><a href="" >Львів</a></li>
                    <li ><a href="" >Харків</a></li>
                    <li ><a href="" >Одеса</a></li>
                    <li ><a href="" >Запоріжжя</a></li>
                    <li ><a href="" >Миколаїв</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-3">
              <div className="available-block">
                <div className="section-title">
                  <h2>Міжнародні</h2>
                </div>
                <nav>
                  <ul>
                    <li ><a href="" >Київ → Варшава</a></li>
                    <li ><a href="" >Львів → Варшава</a></li>
                    <li ><a href="" >Варшава → Київ</a></li>
                    <li ><a href="" >Львів → Краків</a></li>
                    <li ><a href="" >Варшава → Львів</a></li>
                    <li ><a href="" >Львів → Прага</a></li>
                    <li ><a href="" >Київ → Краків</a></li>
                    <li ><a href="" >Київ → Прага</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-3">
              <div className="available-block">
                <div className="section-title">
                  <h2>Внутрішні</h2>
                </div>
                <nav>
                  <ul>
                    <li ><a href="" >Київ → Одеса</a></li>
                    <li ><a href="" >Одеса → Київ</a></li>
                    <li ><a href="" >Київ → Львів</a></li>
                    <li ><a href="" >Львів → Київ</a></li>
                    <li ><a href="" >Київ → Дніпро</a></li>
                    <li ><a href="" >Дніпро → Київ</a></li>
                    <li ><a href="" >Київ → Харків</a></li>
                    <li ><a href="" >Київ → Херсон</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </main>

  )
}
