import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FAQAPage() {

  return (

    <main>
  
      <section className="section hero-faq">
        <div className="hero-banner">   
          <div className="container">
            <div className="row">
              <div className="content">
                <div className="col-12">
                  <div className="section-title">
                    <div className=""><h2><a href="">Квитки на автобус</a></h2></div> <div className="icon ar"></div><div className=""><h2>Питання та відповіді</h2></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Питання та відповіді</h2>
              </div>
            </div>
            <div className="col-xl-6 col-xs-12 col-sm-12">
              <div className="faq-block">
                <div className="content">
                  <div className="section-title-ac">
                    <h3>Рейси і автобуси</h3>
                  </div>

                  <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Які рейси є - рейси та розклад
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Скористайтеся формою пошуку на головній сторінці нашого сайту: вкажіть пункт відправлення та прибуття, бажану дату виїзду і кількість пасажирів і натисніть кнопку “Знайти квиток”.
                            <br/><br/>
                            Ви побачите список рейсів за обраним напрямом із зазначенням ціни та рейтингу перевізників. Ознайомтесь з розкладом і виберіть відповідний рейс.
                            <br/><br/>
                            Якщо на обрану дату немає вільних місць або рейсів, сайт запропонує найближчу дату або альтернативний пункт відправлення.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Чи точно буде рейс
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Інформацію про всі зміни на рейсі ми отримуємо від перевізника, в зв’язку з чим не можемо виключити варіант скасування рейсу з незалежних від нас причин.
                            <br/><br/>
                            Як тільки перевізник сповістить нас, ми відразу зв’яжемося з вами і попередимо про будь-які зміни на рейсі.
                            <br/><br/>
                            Додаткові дані про рейс і номер автобуса ви завжди можете дізнатися за контактним номером перевізника, зазначеним в вашому квитку.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Наскільки заздалегідь потрібно купувати квиток
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Зазвичай перевізники відкривають продаж на регулярні рейси за місяць вперед і ви можете заздалегідь придбати квиток на потрібний маршрут.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Як розрахувати час у дорозі та час прибуття
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Оріентовний час у дорозі, інформація про зупинки і очікуваний час прибуття в кінцевий пункт маршруту відображаються на нашому сайті в розкладі рейсів і завжди вказані в квитках.
                              <br/><br/>
                              У той же час, в дорозі бувають випадки, які складно передбачити: непередбачена затримка автобуса в зв’язку з ситуацією на дорозі, перетином державних кордонів або технічними проблемами.
                              <br/><br/>
                              Ми настійно рекомендуємо закладати додатковий час в поїздці і не планувати пересадку на інший рейс або вид транспорту менш ніж через 2 години при внутрішніх рейсах і менш ніж через 8 годин при міжнародних рейсах.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Який буде автобус
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Інформація щодо рейсу, марки автобуса, доступні сервіси та зручності, що надана перевізником, відображається на нашому сайті при купівлі квитка квитка.
                              <br/><br/>
                              Після покупки квитка ви побачите контактний номер перевізника, за яким можна уточнити додаткові деталі.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Поїздка з тваринами
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              При плануванні поїздки з твариною, ми наполегливо рекомендуємо заздалегідь підготувати ветеринарний паспорт з відмітками про зроблені щеплення, довідку про стан здоров’я тварини, переносну сумку або клітку з глухим дном, а також забезпечити наявність чистої питної води.
                              <br/><br/>
                              Перевізник має право регламентувати правила провезення тварин на автобусах своїх рейсів, тому необхідно уточнювати цю інформацію індивідуально.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Перевезення багажу
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Зверніть увагу, що перевізник має повне право відмовити пасажиру автобуса в провезенні ручної поклажі або багажу, якщо цей багаж перекриває прохід в транспорті іншим пасажирам, або не відповідає кількості та розмірами.
                              <br/><br/>
                              Інформацію про умови провезення багажу на конкретних рейсах ви завжди можете уточнити у перевізника.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Маршрут та зупинки
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              У розкладі та інформації про рейс ми вказуємо весь маршрут та пункти зупинки, які передає нам Перевізник.
                              <br/><br/>
                              Зверніть увагу, що тільки Перевізник регулює маршрут і зупинки, а також визначає можливість висадки і посадки поза вказаними пунктами маршруту.
                              <br/><br/>
                              Додаткові питання про зупинки або уточнення маршруту ви можете дізнатися за контактним номером Перевізника, який вказаний на квитку.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Якщо не знайшов потрібного рейсу
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              На нашому сайті відображені всі актуальні рейси з наявністю місць на обрану дату і кількість пасажирів. Ми постійно працюємо над збільшенням кількості напрямків і підключенням нових перевізників. Можливо, потрібний вам рейс незабаром з’явиться.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Що потрібно для посадки
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Для посадки в автобус необхідно мати при собі паспорт і квиток в роздрукованому вигляді. Дані в паспорті пасажира і його квитку повинні повністю збігатися.
                              <br/><br/>
                              При відсутності одного з перерахованих умов або наявності іншого документа, що засвідчує особу, ми не маємо можливості гарантувати пасажиру посадку в автобус, а Перевізник має право відмовити в поїздці.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              За скільки потрібно приїжджати до початку рейсу
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Уважно ознайомтеся з інформацією на квитку; в деяких випадках, Перевізник вказує обов’язковий час, за яке необхідно приїхати в пункт відправлення рейсу і зареєструватися на посадку.
                                <br/><br/>
                                В інших випадках, ми рекомендуємо приїхати за адресою відправлення мінімум за годину до часу початку рейсу.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Точна адреса відправлення, як знайти автобус
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Вся інформація про рейс, включаючи точну адресу відправлення, яку передає нам Перевізник, вказана на сайті в розкладі рейсів і завжди зображується на квитку.
                              <br/><br/>
                              Додаткові орієнтири або уточнення геолокації ви завжди можете дізнатися за контактним номером Перевізника, вказаним у квитку. 
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Час відправлення і прибуття
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              У квитку завжди вказується місцевий час пункту, в якому ви перебуваєте. Наприклад, якщо у вас квиток на рейс Варшава-Мінськ, відправлення буде за польським часом, а прибуття - за часом в Мінську.
                              <br/><br/>
                              Рекомендуємо звертати особливу увагу на різницю в часових поясах, якщо ви плануєте поїздку з пересадками.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

                </div>
              </div>
            </div>

            <div className="col-xl-6 col-xs-12 col-sm-12">
              <div className="faq-block">
                <div className="content">
                  <div className="section-title-ac">
                    <h3>Бронювання місць та купівля квитків</h3>
                  </div>

                  <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Пільгові квитки
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              На даний момент ми не маємо можливості оформити знижку за пільговим документу, але докладаємо всіх зусиль, щоб найближчим часом ви змогли скористатися цією послугою.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Перетин кордону
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Оріентовний час на проходження прикордонного контролю на міжнародних рейсах враховується в загальній тривалості рейсу, зазначеній на нашому сайті і в квитках.
                              <br/><br/>
                              Зверніть увагу, процедура перетину кордону і проходження митного контролю регламентуються тільки спеціалізованими державними органами і можуть зайняти додатковий час.
                              <br/><br/>
                              Компанія Busfor і перевізник не мають можливості прискорити процес перетину кордону або вплинути на швидкість перевірки митного контролю.
                              <br/><br/>
                              Ми рекомендуємо заздалегідь ознайомитися з правилами перетину кордонів, якщо ви обрали міжнародний рейс, а також підготувати всі необхідні документи.
                              <br/><br/>
                              Список документів та інші питання про процедуру та терміни перетину кордону ви можете уточнити в службах митного контролю конкретної держави.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Чи можна передати посилку
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Компанія Busfor не надає послуг з відправлення посилок автобусними рейсами і не несе відповідальності за ваші особисті домовленості з перевізником.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Чи можна не друкувати квиток
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Наявність при собі роздрукованого квитка є обов’язковою умовою для посадки в автобус.
                              <br/><br/>
                              Виключення становлять рейси які мають позначку «можна не роздруковувати». На цих рейсах перевізники дозволяють пред’явити квиток з екранів ваших гаджетів. Наявність при собі електронного квитка є обов’язковою умовою для посадки в автобус. Зверніть увагу на те, що якщо ви не зможете показати електронний квиток водію, він має право відмовити Вам у посадці в автобус.
                              <br/><br/>
                              У випадку якщо рейс не відмічено позначкою «можна не роздруковувати» квиток потрібно обов‘язково роздрукувати. Без наявності роздрукованого квитка перевізник не зможе взяти вас в автобус.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Як забронювати квиток
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Для бронювання квитка вам необхідно:
                              <br/><br/>
                              Вибрати необхідний рейс за вказаним напрямком, використовуючи форму пошуку на головній сторінці сайту.
                              Заповнити та перевірити всі дані пасажирів
                              Ознайомитися з умовами повернення і публічною офертою
                              Ввести коректний мобільний номер телефону, щоб потім увійти в Особистий кабінет
                              Ввести коректну електронну пошту, на яку будуть вислані квитки
                              Натиснути кнопку “Оплатити” і вибрати зручний спосіб оплати.
                              <br/><br/>
                              Зверніть увагу, у кожного бронювання є термін, до якого його необхідно сплатити інакше воно автоматично буде анульовано.
                              <br/><br/>
                              Квитки будуть сформовані й дійсні тільки після оплати бронювання.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Вільна розсадка, як вибрати місце
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Вільна посадка означає, що на цьому рейсі Перевізник обмежив вибір конкретного місця і фактичний номер місця буде визначено диспетчером безпосередньо при посадці на рейс.
                              <br/><br/>
                              Рекомендуємо вам приходити на посадку завчасно.
                              <br/><br/>
                              Якщо у вибраного Перевізника є можливість вибрати конкретне місце в автобусі, то при оформленні замовлення і натисканні кнопки “Вибір місця”, вам буде показана схема автобуса із зазначенням вільних посадочних місць.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Міжнародні рейси
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Ознайомитись з розкладом або наявністю необхідного вам рейсу можна через пошук рейсів на головній сторінці сайту.
                              <br/><br/>
                              Перед покупкою квитків на міжнародні рейси ми наполегливо рекомендуємо ознайомитись з вимогами перетину кордонів між державами за обраним маршрутом і підготувати всі необхідні документи.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Як оплатити і отримати квитки
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Оплатити квиток ви можете одразу ж після оформлення бронювання, за допомогою будь-якої картки MasterCard або Visa, а також скористатися іншим зручним для Вас способом з тих, що будуть запропоновані сайтом після формування замовлення.
                              <br/><br/>
                              Після оплати замовлення, сформовані квитки будуть автоматично відправлені на електронну пошту, вказану при оформленні замовлення, а також доступні в “Особистому кабінеті”.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Які є знижки, акції і промокодом
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Про всі акції та знижки ми повідомляємо в листах на email, а також в розділі “Блог” в нижній частині головної сторінки сайту.
                              <br/><br/>
                              Рекомендуємо підписатися на нашу розсилку, так як більшість акцій діють тільки для підписників.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Що робити, якщо не спрацював промокод
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Якщо введений вами промокод на знижку не спрацював на сайті, система відобразить інформацію про помилку.
                              <br/><br/>
                              Ми рекомендуємо:
                              <br/><br/>
                              уважно ознайомитися з умовами використання знижки, представленими в листі з промокодом;
                              <br/><br/>
                              перевірити правильність введення (без пробілів і зайвих символів перед і після промокодом)
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              Як залишити свій відгук про поїздку і перевізника
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                              Після поїздки, на електронну пошту, яка була вказана при оформленні замовлення, прийде лист з анкетою оцінки поїздки. Ви можете залишити відгук і оцінити перевізника.
                              <br/><br/>
                              На підставі кожного відгуку формується рейтинг, який зображується на сайті й допомагає клієнтам обрати найнадійнішого перевізника.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

                </div>
              </div>
            </div>
            

            <div className="row">
              <div className="col-xl-8 col-xs-12 col-sm-12">
                <div className="faq-block covid">
                  <div className="content">
                    <div className="section-title-ac">
                      <h3>Інформація про коронавірус Covid-19</h3>
                    </div>

                    <Accordion>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                Інформація про коронавірус Covid-19
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                Подбаймо разом про безпеку в поїздці:
                                <br/><br/>
                                Залишайтеся вдома, якщо у вас є симптоми інфекційного захворювання, висока температура, або ви перебуваєте в групі ризику (маєте хронічні захворювання, вам більш як 65 років і так далі).
                                Обов’язково одягайте маску, а також дотримуйтесь соціальної дистанції.
                                Не потискайте руки попутникам. Мийте руки до і після поїздки.
                                Дотримуйтесь вимог і рекомендацій Міністерства охорони здоров’я, місцевої влади та не забувайте про те, що ви відповідальні за дотримання чинного режиму.
                                <br/><br/>
                                Додаткова інформація: Ми радимо усім користувачам BlaBlaCar ознайомитися з офіційними урядовими рекомендаціями їхньої країни або регіону. Ви можете знайти більше інформації та рекомендацій на цих сторінках:
                                <br/><br/>
                                Міністерство охорони здоров’я України - Інформація про ситуацію в Україні. Міністерство закордонних справ України - Інформація щодо подорожей українців за кордон.
                                <br/><br/>
                                World Health Organization - Всесвітня організація охорони здоров’я.
                                <br/><br/>
                                Дякуємо вам за розуміння і бажаємо міцного здоров’я!

                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                  </Accordion>

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
