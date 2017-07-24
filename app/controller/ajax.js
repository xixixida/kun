'use strict';
module.exports = app => {
    class AjaxController extends app.Controller {
        //获取首页数据
        * index() {
            const ctx = this.ctx;
            //获取header
            const header = [
                {
                    name: '小米手机',
                    void:'1'
                },
                {
                    name: '平板*笔记本',
                    void:'2'
                },
                {
                    name: '电视',
                    void:'3'
                },
                {
                    name: '盒子*影音',
                    void:'4'
                },
                {
                    name: '路由器',
                    void:'5'
                },
                {
                    name: '智能硬件',
                    void:'6'
                },
                {
                    name: '服务',
                    void:'0'
                },
                {
                    name: '社区',
                    void:'0'
                }
                
                           ]
            //获取列表
            const category =[
                {
                    name:'手机 电话卡',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'笔记本 平板',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'电视 盒子',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'移动电源 电池 插线板',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'耳机 音响',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'保护套 贴膜',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'线材 支架 储存卡',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'箱包 服饰 鞋 眼镜',
                    a:'buyphone',
                    void:'1'
                },
                {
                    name:'米兔 生活周边',
                    a:'buyphone',
                    void:'1'
                }
            ]
            
            //获取轮播
            const lunbo = [
                {
                    a:'/lunbo',
                    pic:'/public/image/lunbo1.jpg'
                },
                 {
                    a:'/lunbo',
                    pic:'/public/image/lunbo2.jpg'
                },
                 {
                    a:'/lunbo',
                    pic:'/public/image/lunbo3.jpg'
                },
                 {
                    a:'/lunbo',
                    pic:'/public/image/lunbo4.jpg'
                },
                 {
                    a:'/lunbo',
                    pic:'/public/image/lunbo5.jpg'
                }
                
            ]
            //获取剩余图片
            const data = yield ctx.service.imgs.index();
            ctx.body = {
                header:header,
                category:category,
                lunbo:lunbo,
                data:data
            }
        }
        

    }
    return AjaxController;
};