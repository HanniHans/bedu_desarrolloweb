// function createNode(type, child) {
//     var node = document.createElement(type);
//     var text = document.createTextNode(child);

//     node.appendChild(text);

//     return node;
// }

// console.log(createNode('h1', 'Hello World'));

function createNode(type, child) {
    var node = document.createElement(type);
  
    if(typeof child === "string") {
      var text = document.createTextNode(child);
      node.appendChild(text);
    } else {
      node.appendChild(child);
    }
  
    return node;
}
  
console.log(createNode('h1', createNode('strong', 'Hello World')));

document.getElementById("quote")
  .appendChild(
    createNode("footer", createNode("strong", "- Karl Popper"))
  )