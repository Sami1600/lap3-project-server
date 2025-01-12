const request = require('supertest');
const app = require('../app');

describe('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(8000, () => console.log('Test server running on port 5000'))
    });

    afterAll((done) => {
        console.log('Gracefully stopping the test server')
        api.close(done)
    });

    test('it responds to get / with status code 200', done => {
        request(api)
        .get('/')
        .expect(200, done)
    })
})