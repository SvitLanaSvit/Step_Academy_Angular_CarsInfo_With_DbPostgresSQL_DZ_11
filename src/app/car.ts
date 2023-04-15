export class Car {
  constructor(
    public model: string,
    public manufacturer: string,
    public ps: number,
    public price: number,
    public currency_code: string,
    public id: number = 0){}
}
