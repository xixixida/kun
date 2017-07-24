'use strict';
module.exports = app => {
    class IndexController extends app.Controller {
        * index() {
            const ctx = this.ctx;
            yield this.ctx.render('login/index.html');
        }
        * login() {
           
        }
    }
    return IndexController;
};