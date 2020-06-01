const span = document.querySelector('span') as HTMLSpanElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

export function render(list: any[]) {
  span.innerHTML = (list.length as unknown) as string;
  todoList.innerHTML = '';
  for (const item of list) {
    todoList.innerHTML += `
    	<li>
	      ${item.label}
        <button type="button" data-todo='${JSON.stringify(item)}'>
          Delete
        </button>
      </li>
     `;
  }
}
