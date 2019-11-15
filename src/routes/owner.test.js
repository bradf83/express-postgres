import request from 'supertest';
import app from '../server';
describe('Owner Endpoints', () => {

    /**
     * This is added because when I run `yarn test` it was telling me there were processes still open.
     * I was not getting the error when running from Webstorm.
     * TODO: Track down why this is happening, is the database left open?  The application?
     */
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    it('should list owners', async () => {
        const res = await request(app).get('/owners');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2);
    })
});