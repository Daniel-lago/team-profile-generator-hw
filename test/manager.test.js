const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager´s Answers', () => {
    it('This test proves each of the params received by the Manager Constructor', () => {

        const managerTest = new Manager('Daniel Lago', 'daniel@hotmail.com',  294||"29DL04", 24||"24A");

        expect(managerTest.name).toEqual(expect.any(String));
        expect(managerTest.email).toEqual(expect.any(String));
        expect(managerTest.id).toEqual(expect.any(Number||String));
        expect(managerTest.officeNumber).toEqual(expect.any(Number||String));
    });
});
