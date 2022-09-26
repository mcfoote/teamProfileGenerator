const Engineer = require('../lib/Engineer.js');

test('Test for github data member', () => {
    let testGithub = 'testgitname';
    let testEngineer = new Engineer('test', 1234, 'testemail@gmail.com', testGithub);
    expect(testEngineer.github).toBe(testGithub);
});

test('getGithub returns github member', () => {
    let testGithub = 'testgitname';
    let testEngineer = new Engineer('test', 1234, 'testemail@gmail.com', testGithub);
    expect(testEngineer.getGithub()).toBe(testGithub);
});

test('getRole returns Engineer string', () => {
    let testVal = 'Engineer';
    let testEngineer = new Engineer('test', 1234, 'testemail@gmail.com', 'testgitname');
    expect(testEngineer.getRole()).toBe(testVal);
});