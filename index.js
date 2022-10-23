const reactContentRoot = document.getElementById("root")
const App = () => {
    return(
        <ul>
            <li>APPLE</li>
            <li>MANGO</li>
            <li>ORANGE</li>
            <li>BANANA</li>
        </ul>
    )
}
ReactDOM.render(<App />, reactContentRoot)