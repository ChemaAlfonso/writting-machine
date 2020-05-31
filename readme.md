# writting machine effect
Simple class to create machine writting effect on texts with minimal configuration.


## Usage

Import before you config script
#### HTML
```HTML
    <h1 class="written-text" id="requiredForMultiple"></h1>

    <script src="writting-machine.js"></script>
    <script src="youScripts.js"></script>
```

#### JavaScript
```JavaScript - app.js
    // Get the element
    const myHtmlElement = document.querySelector('.written-text');

    // Set the custom texts
    const myTexts   = ['How are you?...', 'Where are you?...', 'Who are you?...', 'Are you?...'];

    // Instanciate and set the wanted settings
    let myWritterMachine = new WritterMachine( myHtmlElement, { 
        texts: myTexts,         // Your array of texts
        speed: 250,             // Set the writting speed
        prefix: '',             // Add a non animated custom prefix
        sufix: '',              // Add a non animated custom suffix
        lowerLimit: 0,          // Limits the text counting from start
        upperLimit: 0,          // Limits the text counting from end
        enableStyles: true,     // Attach the default styles
        customStyles: ''        // You can set custom styles directly using a string;
    });
```

## Destroy
if you need to destroy the active effect

#### JavaScript
```JavaScript - app.js
    myWritterMachine.stopWritter();
```

Free for use & apreciated attribution.