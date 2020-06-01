export class Store {
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any } = {};
  constructor(
    reducers: { [key: string]: Function },
    initialState: { [key: string]: any }
  ) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  dispatch(action: { type: string; payload?: any }) {
    this.state = this.reduce(this.state, action);
  }

  private reduce(state: { [key: string]: any }, action: any) {
    const newState: { [key: string]: any } = {};
    for (let prop in this.reducers) {
      newState[prop] = this.reducers[prop](this.state[prop], action);
    }
    return newState;
  }
}
