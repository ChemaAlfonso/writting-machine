// =================================
// Example
// =================================
const wElement      = document.querySelector('.written-text') as HTMLElement;

const myTexts   = ['I\'m Chema Alfonso  ', 'How are you?...', 'visit: chemaalfonso.com... ', 'Are you?...'];

let myWritterMachine = new WritterMachine( wElement, { 
    texts: myTexts,         // Your array of texts
    speed: 250,             // Set the writting speed
    prefix: 'Hi, ',         // Adds a non animated custom prefix
    sufix: '',              // Adds a non animated custom suffix
    lowerLimit: 0,          // Limits the text counting from start
    upperLimit: 0,          // Limits the text counting from end
    enableStyles: true,     // Attach the default styles
    customStyles: ''        // You can set custom styles directly using a string;
});