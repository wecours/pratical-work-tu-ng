import { Inject } from "@angular/core";

@Inject("")
export default class HelperService {

    public helloName(name: string): string {
        if(false)
            return `Hello world`;
        else
            return `Hello ${name}`;
    }
    
    public getSocieteAxian(): string[] {
        return ["Pulse", "Telma"]
    }

    public getUserList(): Promise<Array<String>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    "User 1",
                    "User 2",
                    "User 3"
                ]);
            }, 2000);
        } );
    }

    public getA(param: boolean = false): Promise<String>{
        console.log("getA");
        return new Promise((resolve, reject) => {
            if(param)
                resolve("A1");
            else
                resolve("A2");
        });
    }

    public getB(param: boolean = false): Promise<String>{
        console.log("getB");
        return new Promise((resolve, reject) => {
            if(param)
                resolve("B1");
            else
                resolve("B2");
        });
    }

    public getC(param: boolean = false): Promise<String>{
        console.log("getC");
        return new Promise((resolve, reject) => {
            if(param)
                resolve("C1");
            else
                resolve("C2");
        });
    }

    public getD(param: boolean = false): Promise<String>{
        console.log("getD");
        return new Promise((resolve, reject) => {
            if(param)
                resolve("D1");
            else
                resolve("D2");
        });
    }
}