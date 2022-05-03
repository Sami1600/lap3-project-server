const userController = require('../../../controllers/user');
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('user controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        it('it returns all users with status 200', async () => {
            jest.spyOn(User, 'all', 'get')
                .mockResolvedValue([{},{},{}])
            await userController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith([{},{},{}])
        });
    });
});