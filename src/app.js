const app = {
    title: 'Indecision App',
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderApp()
}

const onPickOption = () => {
    const totalOptions = app.options.length;
    const choice = Math.floor((Math.random() * totalOptions))
    console.log(choice)
    alert(app.options[choice])
}


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onPickOption} disabled={!app.options.length}>What should I do ?</button>
            <button onClick={onRemoveAll} disabled={!app.options.length}>Remove all options</button>
            <ol>
                {app.options.length > 0 && app.options.map((option, idx) => <li key={idx}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input name="option" />
                <button>Add option</button>
            </form>
        </div>
    )

    const root = document.querySelector('#root')

    ReactDOM.render(template, root)
}

renderApp();