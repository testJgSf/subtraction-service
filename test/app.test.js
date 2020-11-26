const request = require('supertest');
const app = require('../app');


describe('POST /subtract ',  () => {
    it('respond with 200',  (done) => {
        request(app)
            .post('/subtract')
            .send({
                "factors": [1,2,-3.5]
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});
