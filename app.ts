import * as fromStore from './store/index';
import * as fromRender from './utils/render';

(function() {
  const input = document.querySelector('input') as HTMLInputElement;
  const button = document.querySelector('button') as HTMLButtonElement;
  const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
  const todoList = document.querySelector('.todos') as HTMLLIElement;

  const todos = fromStore.reducer;
  const store = new fromStore.Store({ todos }, {});

  console.log('Initial State::', store.value);
  button.addEventListener(
    'click',
    () => {
      if (!input.value.trim()) return;

      const payload = { label: input.value, complete: false };

      store.dispatch({ type: 'ADD_TODO', payload });
      console.log('After action::', store.value);

      input.value = '';
    },
    false
  );
})();
