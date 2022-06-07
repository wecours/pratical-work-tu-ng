import HelperService from "./helper";

describe("Helper", () => {
    const helperService: HelperService = new HelperService();

    it("should contain name input", () => {
        const helloNomR = helperService.helloName("Koto");
        expect(helloNomR).toContain("Koto");
    });

    describe("Helper::getSocieteAxian", ()=> {
        it("should contain Telma", () => {
            const list = helperService.getSocieteAxian();
            expect(list).toContain("Telma");
        });
    
        it("should not contain Orange", () => {
            const list = helperService.getSocieteAxian();
            expect(list).not.toContain("Orange");
        });
    })

});