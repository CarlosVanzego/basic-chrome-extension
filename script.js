// Call the replaceText function and pass the document body as an argument
replaceText(document.body)

// Define the replaceText function that replaces occurrences of the word "coronavirus" with a styled span element
function replaceText(element) {
  // Check if the element has child nodes
  if (element.hasChildNodes()) {
    // If the element has child nodes, recursively call replaceText on each child node
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    // If the element is a text node and contains the word "coronavirus"
    if (element.textContent.match(/coronavirus/gi)) {
      // Create a new span element
      const newElement = document.createElement('span')
      // Replace occurrences of "coronavirus" with a styled span element containing the word
      newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
      // Replace the original text node with the new styled span element
      element.replaceWith(newElement)
    }
  }
}

