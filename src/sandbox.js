import React from "react";

class SomeComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        fetch('/cities.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                cities: data
            })
        });

    }

    method = () => {

        this.state.arr.push('world'); // мутації напряму стейту технічно можливі, але так робити не слід, бо оновлення компоненти не відбудеться!
    }

    render() {
        return (
            <section>
                  <input name="city" type="text" list="city-list"/>
                        <datalist  id="city-list">
                     {this.state.cities.map(city => <option value={city}>{city}</option>)}
                        </datalist>

            </section>
        )
    }
    
}
// оновлення стану: this.setState -> отримує новий об'єкт, порівнює його з попереднім -> shouldComponentUpdate -> render() -> componentDidUpdate

export default SomeComp;



/*  Jquery */

// $() --- document.querySelector()


//Destructure

const object = {
    key1: 'value1',
    key2: 'value2'
}


const {key1: superVariable, key2} = object;


const arr = [5, 6, 7, 8];

const [, second, third] = arr;

object?.key1


