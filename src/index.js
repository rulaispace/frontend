import React from "react"
import {render} from "react-dom"
import StoryFactory from "./redux/story-factory"
import Dashboard from './layout/dashboard'

const store = new StoryFactory({enableLocalStorage: false}).create()

const refresh = () => {
    return render(
        <Dashboard store={store}/>,
        document.getElementById('root')
    )
}

store.subscribe(refresh)
refresh()