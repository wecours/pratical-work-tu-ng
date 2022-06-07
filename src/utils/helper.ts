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
}