const Intern = require('../lib/Intern.js');

test('Test for school data member', () => {
    let testSchool = 'testSchoolName';
    let testIntern = new Intern('test', 1234, 'testemail@gmail.com', testSchool);
    expect(testIntern.school).toBe(testSchool);
});

test('getSchool returns school member', () => {
    let testSchool = 'testSchoolName';
    let testIntern = new Intern('test', 1234, 'testemail@gmail.com', testSchool);
    expect(testIntern.getSchool()).toBe(testSchool);
});

test('getRole returns Intern', () => {
    let testVal = 'Intern';
    let testIntern = new Intern('test', 1234, 'testemail@gmail.com', 'testSchoolName');
    expect(testIntern.getRole()).toBe(testVal);
});