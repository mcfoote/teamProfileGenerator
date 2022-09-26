const Employee = require('../lib/Employee.js');

test('Able to create new Employee object', () => {
    let testEmployee = new Employee();
    expect(typeof(testEmployee)).toBe('object');
});

test('Test for name data member', () => {
    let testName = 'test';
    let testEmployee = new Employee(testName);
    expect(testEmployee.name).toBe(testName);
});

test('Test for id data member', () => {
    let testId = 1234;
    let testEmployee = new Employee('test', testId);
    expect(testEmployee.id).toBe(testId);
});

test('Test for email data member', () => {
    let testEmail = 'testemail@gmail.com';
    let testEmployee = new Employee('test', 1234, testEmail);
    expect(testEmployee.email).toBe(testEmail);
});

test('getName returns name member', () => {
    let testName = 'test';
    let testEmployee = new Employee(testName);
    expect(testEmployee.name).toBe(testName);
});

test('getId returns id member', () => {
    let testId = 1234;
    let testEmployee = new Employee('test', testId);
    expect(testEmployee.id).toBe(testId);
});

test('getEmail returns email member', () => {
    let testEmail = 'testemail@gmail.com';
    let testEmployee = new Employee('test', 1234, testEmail);
    expect(testEmployee.email).toBe(testEmail);
});

test('getRole returns Employee', () => {
    let testVal = 'Employee';
    let testEmployee = new Employee('test', 1234, 'testemail@gmail.com');
    expect(testEmployee.getRole()).toBe(testVal);
});