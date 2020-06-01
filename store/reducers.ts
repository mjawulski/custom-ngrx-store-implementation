import * as fromAction from './actions';
export const initialState = {
  loading: false,
  loaded: false,
  todos: [{ label: 'Learn NGRX', complete: false }]
};

export function reducer(
  currentState: { [key: string]: any } = initialState,
  action: { type: string; payload: any }
): any {
  switch (action.type) {
    case fromAction.ADD_TODO: {
      const newState = {
        ...currentState,
        todos: [...currentState.todos, action.payload]
      };
      return newState;
    }
  }

  return currentState;
}
