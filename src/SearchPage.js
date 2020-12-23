import React, {useEffect, useState} from 'react';
import SearchBar from "./searchBar";
import BattleList from "./BattleList";

const SearchPage = (props) => {

    const [input, setInput] = useState('');
    const [battleListDefault, setBattleListDefault] = useState();
    const [battleList, setBattleList] = useState();

    const fetchData = async () => {
        return await fetch('https://career-ninja.herokuapp.com/search?king')
            .then(response => response.json())
            .then(data => {
                setBattleList(data);
                setBattleListDefault(data);
            });};

    const updateInput = async (input) => {
        const filtered = battleListDefault.filter(battle => {
            return battle.name.toLowerCase().includes(input.toLowerCase())
        });
        setInput(input);
        setBattleList(filtered);
    };

    useEffect( () => {fetchData().then(r => console.log(r))},[]);

    return (
        <>
            <h1>Battle List</h1>
            <SearchBar
                input={input}
                onChange={updateInput}
            />
            <BattleList battleList={battleList}/>
        </>
    );
};

export default SearchPage
