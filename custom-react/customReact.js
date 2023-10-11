function customRender(reactElement,mainContainer)
{
  const htmlElement = document.createElement(reactElement.type);
  htmlElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    htmlElement.setAttribute(prop,reactElement.props[prop]);
  }

  mainContainer.appendChild(htmlElement);
}


const reactElement = {
  type: 'a',
  props: {
    href: "google.com",
    target: '_blank'
  },
  children: "Click here to visit Google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer);
