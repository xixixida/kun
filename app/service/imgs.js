'use strict';
var glob = require('glob');
var path = require('path')
module.exports = app => {
    class IndexController extends app.Controller { 
        * index() {
            
            var pattern = './app/public/image/**';

            return new Promise(function (resolve, reject) {
                glob(pattern, {
                    nodir: true
                }, function (err, files) {
                    if (err)
                        return reject(err);
                        resolve(files);
                })
            });

        }
    }
    return IndexController;
};