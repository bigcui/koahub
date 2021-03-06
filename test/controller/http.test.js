const Koahub = require('./../../app');
const request = require('supertest');

let app;

describe('http controller', function () {

    beforeEach(function () {
        app = new Koahub({root: __dirname});
        app.loadHttpMiddlewares();
    });

    describe('http request', function () {

        it('call http should response 200', function (done) {
            request(app.getServer())
                .get('/home/index/index')
                .expect(200)
                .expect('Hello World!')
                .end(done);
        });

        it('call http should response 200', function (done) {
            koahub.config('url_suffix', '.html');
            request(app.getServer())
                .get('/home/index/index.html')
                .expect(200)
                .expect('Hello World!')
                .end(done);
        })

        it('call http should response 404', function (done) {
            koahub.config('url_suffix', '.html');
            request(app.getServer())
                .get('/home/index/index.php')
                .expect(404)
                .end(done);
        })

        it('call http should response 404', function (done) {
            koahub.config('url_suffix', '');
            request(app.getServer())
                .get('/home/index/index.jpg')
                .expect(404)
                .end(done);
        })

        it('call http // should response 404', function (done) {
            request(app.getServer())
                .get('//')
                .expect(404)
                .end(done);
        })

        it('call /home/index/index2 should response 200', function (done) {
            request(app.getServer())
                .get('/home/index/index2')
                .expect(200)
                .expect('Hello World!')
                .end(done);
        });

        it('call /home/index/index4 should response 200', function (done) {
            request(app.getServer())
                .get('/home/index/index4')
                .expect(200)
                .expect('3')
                .end(done);
        });

        it('call http should response 200 body Hello World!', function (done) {
            request(app.getServer())
                .get('/home/index/index')
                .expect('Hello World!')
                .end(done);
        });

        it('call /admin should response 404', function (done) {
            request(app.getServer())
                .get('/admin')
                .expect(404)
                .end(done);
        });

        it('call /home/notfound should response 404', function (done) {
            request(app.getServer())
                .get('/home/notfound')
                .expect(404)
                .end(done);
        });

        it('call /home/index/notfound should response 404', function (done) {
            request(app.getServer())
                .get('/home/index/notfound')
                .expect(404)
                .end(done);
        });

        it('call /home/index/index5 should response 200', function (done) {
            request(app.getServer())
                .get('/home/index/index5')
                .expect(200)
                .end(done);
        });

        it('call /home/index/index6 should response 200', function (done) {
            request(app.getServer())
                .get('/home/index/index6')
                .expect(200)
                .expect('1')
                .end(done);
        });

        it('call /home/index/message should response 500', function (done) {
            request(app.getServer())
                .get('/home/index/message')
                .expect(500)
                .end(done);
        });
    });

    describe('router request', function () {

        it('call /product should 200 body Hello World!', function (done) {
            request(app.getServer())
                .get('/product')
                .expect(200)
                .expect('Hello World!')
                .end(done);
        });

        it('call get /product/1 should 200 body 1', function (done) {
            request(app.getServer())
                .get('/product/1')
                .expect(200)
                .expect('1')
                .end(done);
        });

        it('call post /product/1 should 404', function (done) {
            request(app.getServer())
                .post('/product/1')
                .expect(404)
                .end(done);
        });

        it('call post /product should 404', function (done) {
            delete koahub.configs.router;
            request(app.getServer())
                .post('/product')
                .expect(404)
                .end(done);
        });
    });
});


