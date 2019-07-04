import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';

export class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            string: "",
            time: Date.now()
        };
    };

    edit = () => {
        this.setState({ edit: true });
    };

    setname = (event) => {
        this.setState({ string: event.target.value });
    };

    save = () => {
        this.setState({ edit: false });
    };

    check = (event) => {
        this.setState({ string: event.target.value });
        var str = this.state.string;
        var us = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];
        var usl = us.length;
        var arr = str.split('');
        var arrl = arr.length;
        for (var i = 0; i <= us.length; i++) {
            if (arr[0] == us[i]) {
                return (true);
            } else {
                return (false);
            }
        }
    };

    //Если первая буква большая, то (font-weight: bold;), если маленькая, то (font-style: oblique;)

    render() {
        return ( <
            div className = "box" >
            <
            div className = "text" >
            <
            h1 className = "hello" > Hello, world!!! < /h1>  <
            p className = { this.check() ? "pmi" : "imp" }
            hidden = { this.state.edit } > { this.state.time }, { this.state.string } < /p>  <
            textarea className = "txtar"
            hidden = { this.state.edit }
            onChange = { this.setname } > < /textarea>  <
            /div>  <
            button hidden = { this.state.edit }
            onClick = { this.edit }
            className = "namebtn" > Ввести имя < /button>  <
            button hidden = {!this.state.edit }
            onClick = { this.save }
            className = "namebtnsave" > Ok < /button>  <
            /div>
        );
    }
};

export default Text;