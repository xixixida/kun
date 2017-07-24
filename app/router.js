'use strict';

module.exports = app => {
  //app.redirect('/', '/news');
  app.get('/', app.controller.index.index);
    app.get('/buyphone',app.controller.index.buyphone)
    app.get('/xiangqing',app.controller.index.xiangqing)
    app.get('/product',app.controller.index.product)
    app.get('/guc',app.controller.index.guc)
    app.get('/cart',app.controller.index.cart)
    //ajax
    app.get('/header',app.controller.ajax.index)
    
};
