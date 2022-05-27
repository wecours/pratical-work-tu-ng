
export function add(a: number, b: number): number {
    return a + b;
}
export function sub(a: number, b: number): number {
    return a - b;
}
export function divide(a: number, b: number): number {
    if (b != 0)
        return a / b;
    else
        throw Error("Erreur : Division par zero")
}