const Employee = require('../lib/Employee');
const Intern = require('../lib/intern');

describe('Intern´s Answers', () => {
    it('This test proves each of the params received by the intern Constructor', () => {

        const internTest = new Intern('Daniel Lago',  294||"29DL04", 'daniel@hotmail.com',  "UNAM");

        expect(internTest.name).toEqual(expect.any(String));
        expect(internTest.id).toEqual(expect.any(Number||String));
        expect(internTest.email).toEqual(expect.any(String));
        expect(internTest.school).toEqual(expect.any(String));
        expect(internTest.role).toBe("Intern")
    });
});
