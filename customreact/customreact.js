function customRender(reactElement, container){
    //not a good way
    /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement) */

    //proper way
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.linkedin.com/in/bilalilyasjhandir',
        target: '_blank'
    },
    children: 'Click here to visit my LinkedIn'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)