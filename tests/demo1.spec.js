import request from "supertest";
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

describe('outer 1', () => {

    beforeAll(() => console.log('1.2 - beforeAll'));
    afterAll(() => console.log('1.2 - afterAll'));
    beforeEach(() => console.log('1.2 - beforeEach'));
    afterEach(() => console.log('1.2 - afterEach'));

    console.log('describe outer 1-a');

    describe('describe inner 1-1', () => {
        console.log('describe inner 1-1');
        test('test inner 1-1', async () => {
            console.log('test for describe inner 1-1');
            await new Promise(resolve => setTimeout(resolve, 2000));
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer 1-b');

    test('test outer 1-1', async () => {
        console.log('test for describe outer 1-1');
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(true).toEqual(true);
    });

    describe('describe inner 1-2', () => {
        console.log('describe inner 1-2');
        test('test for describe inner 1-2', async () => {
            console.log('test for describe inner 1-2');
            await new Promise(resolve => setTimeout(resolve, 2000));
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer 1-c');
});