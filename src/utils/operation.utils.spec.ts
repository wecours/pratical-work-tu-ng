// const add = (a: number, b: number): number => 0;
import { add, divide, sub } from "./operation.utils";

describe("OperationUtils", () => {
    it("should add two number", () => {
        let a: number = 6;
        let b: number = 3;
        let c = add(a, b); // A developper
        expect(c).toEqual(9);
    });

    it("should sub two number", () => {
        let a: number = 6;
        let b: number = 3;
        let c = sub(a, b);
        expect(c).toEqual(3);
    });

    it("should divide two number", () => {
        let a: number = 6;
        let b: number = 3;
        let c = divide(a, b);
        expect(c).toEqual(2);
    });

    it("should return error wheh divide by zero", () => {
        let a: number = 6;
        let b: number = 0;
        expect(()=>{
            divide(a, b)
        }).toThrowError("Erreur : Division par zero");
    });

});