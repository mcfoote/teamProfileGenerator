const Manager = require('../lib/Manager.js');

test('Test for officeNumber member', () => {
    let testNumber = 4321;
    let testManager = new Manager('test', 1234, 'testemail@gmail.com', testNumber);
    expect(testManager.officeNumber).toBe(testNumber);
});

test('getOfficeNumber returns officeNumber member', () => {
    let testNumber = 4321;
    let testManager = new Manager('test', 1234, 'testemail@gmail.com', testNumber);
    expect(testManager.getOfficeNumber()).toBe(testNumber);
});

test('getRole returns Manager', () => {
    let testVal = 'Manager';
    let testManager = new Manager('test', 1234, 'testemail@gmail.com', 'testgitname');
    expect(testManager.getRole()).toBe(testVal);
});