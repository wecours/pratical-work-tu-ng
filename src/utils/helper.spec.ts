import { getSocieteAxian, helloName } from "./helper";

describe("Helper", () => {

    it("should contain name input", () => {
        const helloNomR = helloName("Koto");
        expect(helloNomR).toContain("Koto");
    });

    describe("Helper::getSocieteAxian", ()=> {
        it("should contain Telma", () => {
            const list = getSocieteAxian();
            expect(list).toContain("Telma");
        });
    
        it("should not contain Orange", () => {
            const list = getSocieteAxian();
            expect(list).not.toContain("Orange");
        });
    })

});