const User = require('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig');
const { TestWatcher } = require('jest');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('get all', () => {
        it('it resolves all users on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{},{},{}]});
            const all = await User.all
            expect(all).toHaveLength(3);
        });

        it('the error message for get all is correct', async () => {
            return User.all.catch(error => {
                expect(error).toBe('Cannot retrieve all users');
            });
        });
    });
});