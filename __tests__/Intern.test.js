const Intern = require('../lib/Intern');


test('creates an Intern Object', () => {
    const intern = new Intern('Jacob', 13579, 'jacobOdd137@test.com', 'Vanderbilt');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));



    expect(intern.getName()).toEqual('Jacob');
    expect(intern.getId()).toBe(13579);
    expect(intern.getEmail()).toBe('jacobOdd137@test.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('Vanderbilt');

});