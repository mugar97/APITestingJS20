import request from "supertest";
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

describe('outer 2', () => {

    beforeAll(() => console.log('2.2 - beforeAll'));
    afterAll(() => console.log('2.2 - afterAll'));
    beforeEach(() => console.log('2.2 - beforeEach'));
    afterEach(() => console.log('2.2 - afterEach'));

    console.log('describe outer 2-a');

    describe('describe inner 2-1', () => {
        console.log('describe inner 2-1');
        test('test inner 2-1', async () => {
            console.log('test for describe inner 2-1');
            await new Promise(resolve => setTimeout(resolve, 2000));
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer 2-b');

    test('test outer 2-1', async () => {
        console.log('test for describe outer 2-1');
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(true).toEqual(true);
    });

    describe('describe inner 2-2', () => {
        console.log('describe inner 2-2');
        test('test for describe inner 2-2', async () => {
            console.log('test for describe inner 2-2');
            await new Promise(resolve => setTimeout(resolve, 2000));
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer 2-c');
});