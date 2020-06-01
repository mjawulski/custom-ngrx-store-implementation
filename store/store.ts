export class Store {
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };
  constructor(
    reducers: { [key: string]: Function },
    initialState: { [key: string]: any }
  ) {
    this.reducers = reducers;
    this.state = initialState;
  }

  get value() {
    return this.state;
  }
}
