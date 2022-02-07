import React, { useState } from "react";
import Input from './components/Input/Input';
import Select from "./components/Select/Select";
import Header from './components/Header/Header';
import './App.css';


const App = () => {
  const cases = ['Именительный', 'Родительный', 'Дательный', 'Винительный', 'Творительный', 'Предложный'];
  const [word, setWord] = useState('');
  const [grammarCase, setGrammarCase] = useState(word);


  const makeCase = (event) => {
    var value = event.target.value;
    switch(value) {
      case '1' :
        setGrammarCase(genitiveCase(word));
        break;
        case '2' :
          setGrammarCase(dativeCase(word));
          break;
        case '3': 
        setGrammarCase(accusativeCase(word));
        break;
        case '4' :
          setGrammarCase(ablativeCase(word));
          break;
        case '5' : 
        setGrammarCase(prepositionalCase(word));
        break;
        case '0' :
          setGrammarCase(word);
          break;
        default: 
        alert('Упс что-то пошло не так')
    }
  }
  function handleInput(event) {
    setWord(event.target.value);
  }

  function stringMaker(string) {
    return string.slice(0, -1);
  }
  function findEnding(string) {
    var result = string.match(/[аяоеь]$/gm);
    if (result) {
      return result.toString();
    } else {
      return result;
    }
  }
  function firstDeclension(string) {
    if (findEnding(string) === 'а' || findEnding(string) === 'я') {
      return string;
    }
  }
  function secondDeclension(string) {
    if (findEnding(string) === 'о' || findEnding(string) === 'е') {
      return string;
    }
  }
  function thirdDeclension(string) {
    if (findEnding(string) === 'ь') {
      return string;
    }
  }
  function genitiveCase(string) {
    return firstDeclension(string) ? (stringMaker(string) + 'и')
      : secondDeclension(string) ? (stringMaker(string) + 'я')
        : thirdDeclension(string) ? (stringMaker(string) + 'и')
          : string + 'a';
  }
  function dativeCase(string) {
    return firstDeclension(string) ? (stringMaker(string) + 'е')
      : secondDeclension(string) ? (stringMaker(string) + 'у')
        : thirdDeclension(string) ? (stringMaker(string) + 'и')
          : string + 'у';
  }
  function accusativeCase(string) {
    return firstDeclension(string) ? (stringMaker(string) + 'у')
      : secondDeclension(string) ? (stringMaker(string) + 'я')
        : thirdDeclension(string) ? (stringMaker(string) + 'ь')
          : string;
  }

  function ablativeCase(string) {
    return firstDeclension(string) ? (stringMaker(string) + 'ой')
      : secondDeclension(string) ? (stringMaker(string) + 'ом')
        : thirdDeclension(string) ? (stringMaker(string) + 'ью')
          : string + 'ом';
  }
  function prepositionalCase(string) {
    return firstDeclension(string) ? (stringMaker(string) + 'е')
      : secondDeclension(string) ? (stringMaker(string) + 'е')
        : thirdDeclension(string) ? (stringMaker(string) + 'и')
          : string + 'е';
  }

  return (
    <div className="main">
      <Header />
      <div className="main__info">
      <Input
        value={word}
        onChange={handleInput} />
      <Select onChange={makeCase} cases={cases} />
      <div className='main__answer'>{`Получилось... ${grammarCase}`}
      </div>
      <img src="mainLogo.jpg" alt="logo"/>
      </div>
    </div>
  );
}

export default App;
