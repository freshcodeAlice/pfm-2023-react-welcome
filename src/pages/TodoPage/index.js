import React from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import styles from './TodoPage.module.css';

class TodoPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
		this.counter = 0;
	}

	getNewItem = ({todo, done}) => {
		const newItem = {
			body: todo,
			done,
			id: this.counter++
		}
		const newList = [...this.state.list, newItem];
		this.setState({
			list: newList
		})
	}

	checkItemHandler = (value, id) => {
		console.log(value, id);
		const newList = this.state.list.map(item => {
			if(item.id === id) {
				item.done = value
			}
			return item
		});
		this.setState({
			list: newList
		})
	}

	deleteItem = (id) => {
		console.log(id)
		const filtered = this.state.list.filter(el => el.id !== id);
		this.setState({
			list: filtered
		})
	}
	
	render() {
		return (
			<div className={styles.container}>
				<TodoForm getCallback={this.getNewItem} className={styles['red-text']}/>
				<TodoList 
					list={this.state.list} 
					checkboxHandler={this.checkItemHandler}
					deleteHandler={this.deleteItem}/>
			</div>
		);
	}
}

export default TodoPage;














/*
Зробити ToDoList

+Форма для вводу тексту + кнопка відправки
+Коли користувач вводить нову справу, відправляє її, вона з'являється в списку справ

* (після відправки тексту очистити форму, і не вносити в список "пусті" рядки)

1. Розділення на компоненти має відповідати принципу єдиної відповідальності

2. Завдання мінімум: 
	на сторінці має бути форма, кнопка, список в який додаються елементи
	
	2 частина:
+		кожен елемент має галочку виконаного завдання
		(справа може бути виконана, а може бути невиконана)
	3 частина:
+		кожен елемент має кнопку видалення
Опціонально: переробити список таким чином, щоби він складався з двох списків:
список ще не виконаного			список виконаних справ

і після виконання справи (чекання чекбокса) справа переміщується в список виконаних

*/