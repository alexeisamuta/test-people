import React, {useEffect} from 'react';
import {CardGrid} from "./card/CardGrid";
import {useDispatch, useSelector} from "react-redux";
import {setUsersTC} from "./redux/persons-reducer";
import {Header} from "./header/Header";
import {RootStoreSelector} from "./redux/persons-selectors";

function App() {

    const {numberPeople} = useSelector(RootStoreSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsersTC(numberPeople))
    }, [dispatch, numberPeople])

    return <div>
        <Header/>
        <CardGrid/>
    </div>
}

export default App;
