"use strict";

var app = {
  title: 'Indecision App',
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var onPickOption = function onPickOption() {
  var totalOptions = app.options.length;
  var choice = Math.floor(Math.random() * totalOptions);
  console.log(choice);
  alert(app.options[choice]);
};

var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("button", {
    onClick: onPickOption,
    disabled: !app.options.length
  }, "What should I do ?"), /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveAll,
    disabled: !app.options.length
  }, "Remove all options"), /*#__PURE__*/React.createElement("ol", null, app.options.length > 0 && app.options.map(function (option, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add option")));
  var root = document.querySelector('#root');
  ReactDOM.render(template, root);
};

renderApp();
