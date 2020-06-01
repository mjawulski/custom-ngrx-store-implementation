export const ADD_TODO: string = '[Todo:] ADD_TODO';
export class AddTodo {
  readonly type: string = ADD_TODO;
  constructor(public payload: any) {}
}
