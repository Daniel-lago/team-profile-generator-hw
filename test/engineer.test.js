const Employee = require('../lib/Employee');
const Engineer = require('../lib/engineer');


describe('Engineer´s Answers', () => {
    it('This test proves each of the params received by the Engineer Constructor', () => {

        const engineerTest = new Engineer('Daniel Lago',  294||"29DL04",  'daniel@hotmail.com', 24||"24A");

        expect(engineerTest.name).toEqual(expect.any(String));
        expect(engineerTest.id).toEqual(expect.any(Number||String));
        expect(engineerTest.email).toEqual(expect.any(String));
        expect(engineerTest.github).toEqual(expect.any(Number||String));
        expect(engineerTest.role).toBe("Engineer")
    });
});
