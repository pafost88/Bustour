import React from 'react';



function SearchBlock() {
      
  return (
      
    <div className="search-block">
      <div className="content">
            <div className="search-menu">
                  <div className="content-menu">
                        <div className="block">
                              <div className="content-block">
                                    <label for="floatingInput">Звідки</label>
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Львів" />
                              </div>
                        </div>
                        <div className="block">
                              <div className="content-block">
                                    <label for="floatingInput">Куди</label>
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Луцьк" />
                              </div>
                        </div>
                        <div className="block">
                              <div className="content-block">
                                    <label for="floatingInput">Дата</label>
                                    {/* <input type="email" class="form-control" id="floatingInput" placeholder="Іванов" /> */}
                              </div>
                        </div>
                        <div className="block">
                              <div className="content-block">
                                    <div className="title">Пасажири</div>
                                    <div className="quantity_inner">        
                                          <button className="bt_minus">
                                                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                          </button>
                                          <input type="text" value="1" size="2" className="quantity" data-max-count="20" />
                                          <button className="bt_plus">
                                                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
            <div className="search-button">
                  <button className="button">
                        Знайти квиток
                  </button>
            </div>
      </div>
    </div>
  );
}

export default SearchBlock;