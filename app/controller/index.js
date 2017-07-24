'use strict';
var fs = require('fs')
var path = require('path')
module.exports = app => {
    class IndexController extends app.Controller {
        /*   * list() {
             const ctx = this.ctx;
             const pageSize = this.config.news.pageSize;
             const page = parseInt(ctx.query.page) || 1;

             const idList = yield ctx.service.hackerNews.getTopStories(page);
             // get itemInfo parallel
             const newsList = yield idList.map(id => ctx.service.hackerNews.getItem(id));
             yield ctx.render('news/list.tpl', { list: newsList, page, pageSize });
           }

           * detail() {
             const ctx = this.ctx;
             const id = ctx.params.id;
             const newsInfo = yield ctx.service.hackerNews.getItem(id);
             // get comment parallel
             const commentList = yield (newsInfo.kids || []).map(id => ctx.service.hackerNews.getItem(id));
             yield ctx.render('news/detail.tpl', { item: newsInfo, comments: commentList });
           }

           * user() {
             const ctx = this.ctx;
             const id = ctx.params.id;
             const userInfo = yield ctx.service.hackerNews.getUser(id);
             yield ctx.render('news/user.tpl', { user: userInfo });
           }*/

        * index() {
            const ctx = this.ctx;
             
            try{
                ctx.session.guc.length
            }catch(error){
                ctx.session.guc = []
                }
            let len = ctx.session.guc.length
            yield this.ctx.render('index.html',{len:len/2});
        }
        * buyphone() {
            const ctx = this.ctx;
            try{
                ctx.session.guc.length
            }catch(error){
                ctx.session.guc = []
                }
            let len = ctx.session.guc.length
            yield this.ctx.render('buyphone.html',{len:len/2});
        }
        * xiangqing() {
            const ctx = this.ctx;
            const id = ctx.queries.id;
            try{
                ctx.session.guc.length
            }catch(error){
                ctx.session.guc = []
                }
            let len = ctx.session.guc.length
            yield this.ctx.render('xiangqing.html',{id,id,len:len/2});
        }
        * guc (){
            const ctx =this.ctx;
            const id = ctx.queries.id;
            try{
                ctx.session.guc.length
            }catch(error){
                ctx.session.guc = []
                }
            let len = ctx.session.guc.length
            if(id){
                
                ctx.session.guc[len+1] = id;
                console.log(ctx.session.guc)
                yield ctx.render('buySuccess.html')
            }else{
                yield ctx.render('buyError.html',{len:len/2})
            }
        }
        *product(){
            const ctx = this.ctx;
            const id = ctx.queries.id;
            try{
                ctx.session.guc.length
            }catch(error){
                ctx.session.guc = []
                }
            let len = ctx.session.guc.length
             yield ctx.render('product.html',{id,id,len:len/2})
        }
        *cart(){
            const ctx = this.ctx;
            const id = ctx.queries.id;
            try{
                ctx.session.guc.length
            }catch(error){
                ctx.session.guc = []
                }
            let len = ctx.session.guc.length
            let gw = ctx.session.guc
            yield ctx.render('cart.html',{id,id,len:len/2,gw:gw})
        }
    }
    return IndexController;
};