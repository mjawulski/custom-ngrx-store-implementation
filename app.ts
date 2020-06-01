import * as fromStore from './store/index';
import * as fromRender from './utils/render';
import { AddTodo } from './store/index';

(function() {
  const input = document.querySelector('input') as HTMLInputElement;
  const button = document.querySelector('button') as HTMLButtonElement;
  const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
  const todoList = document.querySelector('.todos') as HTMLLIElement;

  const todos = fromStore.reducer;
  const store = new fromStore.Store({ todos }, {});

  const unsubscribe = store.subscribe((state: any) => {
    fromRender.render(state.todos.todos);
  });
  console.log('Initial State::', store.value);
  button.addEventListener(
    'click',
    () => {
      if (!input.value.trim()) return;

      const payload = { label: input.value, complete: false };

      store.dispatch(new AddTodo(payload));

      input.value = '';
    },
    false
  );

  destroy.addEventListener('click', () => {
    unsubscribe();
  });

  store.subscribe((store: any) => {
    console.log('FOREVA::', store);
  });
})();
