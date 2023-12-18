import React, { Component, PureComponent } from 'react';

class Child extends PureComponent {
    render() {
        console.log('child re-render')
        return (
            <div>
                <h1>Prop: {this.props.num}</h1>
            </div>
        );
    }
}

export default Child;


/*

Створити батьківську компоненту, яка при кожному оновленні надсилає дочірній компоненті рандомні значення від 0 до 1
Дочірня виводить на екран значення зі стейту. За одних і тих самих вхідних даних вона має пропускати пере-рендер

*/