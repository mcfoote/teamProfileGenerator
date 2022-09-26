const Manager = require('../lib/Manager.js');

test('Test for officeNumber member', () => {
    let testNumber = 4321;
    let testManager = new Manager('test', 1234, 'testemail@gmail.com');
    expect(testManager.officeNumber).toBe(testNumber);
});

test('getOfficeNumber returns officeNumber member', () => {
    let testNumber = 4321;
    let testManager = new Manager('test', 1234, 'testemail@gmail.com');
    expect(testManager.getOfficeNumber()).toBe(testNumber);
});

test('Get role returns Manager', () => {
    let testVal = 'Manager';
    let testManager = new Engineer('test', 1234, 'testemail@gmail.com', 'testgitname');
    expect(testEngineer.getRole()).toBe(testVal);
});