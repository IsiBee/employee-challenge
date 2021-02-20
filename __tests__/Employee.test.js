const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('validates the name from the Employee object with getName function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getName()).toEqual(employee.name);
});

test('validates id from the Employee object with getId function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getId()).toEqual(employee.id);
});

test('validates email from the Employee object with getEmail function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getEmail()).toEqual(employee.email);
})

test('gets the string of Employee from the getRole function', () => {
    const employee = new Employee('Joe', 12345, 'joe@test.com');

    expect(employee.getRole()).toEqual('Employee');
})