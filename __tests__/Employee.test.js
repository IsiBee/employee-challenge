const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('validates the name from the Employee object with getName function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getName()).toBe('Joe');
});

test('validates id from the Employee object with getId function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getId()).toBe(12345);
});

test('validates email from the Employee object with getEmail function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getEmail()).toBe('mailto:joe@test.com');
})

test('gets the string of Employee from the getRole function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getRole()).toBe('Employee');
})