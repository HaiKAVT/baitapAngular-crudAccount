export class Account {
  name!: string;
  img!: string;
  status!: boolean
  pass!: string

  constructor(name: string, img: string, status: boolean, pass: string) {
    this.name = name;
    this.img = img;
    this.status = status;
    this.pass = pass;
  }
}
