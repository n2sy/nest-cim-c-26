// Version 2
export class Task {

  constructor(
    public id: string,
    public title: string,
    public year: number,
    public status: string,
    public createdAt: Date,
  ) {

  }
}

//Version 1
// export class Task {
//   public id: string;
//   public title: string;
//   public year: number;

//   constructor(id: string, title: string, year: number) {
//     this.id = id;
//     this.title = title;
//     this.year = year;
//   }
// }
