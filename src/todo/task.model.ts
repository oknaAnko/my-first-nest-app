// export class TaskModel {
//   id: number;
//   description: string;
//   is_complete?: boolean;
// }
export class TaskModel {
  constructor(
    public id: number,
    public description: string,
    public is_complete?: boolean,
  ) {}
}
