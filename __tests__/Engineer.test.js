const Engineer = require('../lib/Engineer');


test('creates a Engineer Object', () => {
    const engineer = new Engineer('Julie', 24680, 'julieann246@test.com', 'julieA');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));


    expect(engineer.getName()).toBe('Julie');
    expect(engineer.getId()).toBe(24680);
    expect(engineer.getEmail()).toBe('julieann246@test.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('github.com/' + engineer.github);
});