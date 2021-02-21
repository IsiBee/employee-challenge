const Manager = require('../lib/Manager');


test('creates a Manager Object', () => {
    const manager = new Manager('Jane', 45678, 'jane456@test.com', 5);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

    expect(manager.getName()).toBe('Jane');
    expect(manager.getId()).toBe(45678);
    expect(manager.getEmail()).toBe('mailto:jane456@test.com');
    expect(manager.getRole()).toBe('Manager');
});