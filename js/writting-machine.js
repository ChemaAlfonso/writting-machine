"use strict";
class WritterMachine {
    constructor(writterElement, { texts = [''], speed = 250, prefix = '', sufix = '', enableStyles = true, customStyles = '', lowerLimit = 0, upperLimit = 0 }) {
        if (writterElement) {
            if (enableStyles)
                this.setStyles(writterElement, customStyles, speed);
            this.makeWritter(writterElement, texts, speed, prefix, sufix, lowerLimit, upperLimit);
        }
        else
            throw new Error('HTML element was not provided');
    }
    makeWritter(writterElement, texts, speed, prefix, sufix, lowerLimit, upperLimit) {
        let actualIndex = lowerLimit;
        let lastIndex = actualIndex - 1;
        let actualText = 0;
        let actualTextUpperLimit = texts[actualText].length - upperLimit;
        this.machineInterval = setInterval(() => {
            if (actualIndex > lastIndex)
                actualIndex++;
            else
                actualIndex--;
            // Reach the end of actual text
            if (actualIndex === actualTextUpperLimit)
                lastIndex = actualTextUpperLimit + 1;
            // Returned to start of actual text
            if (actualIndex === lowerLimit) {
                lastIndex = lowerLimit - 1;
                actualText++;
                if (!texts[actualText])
                    actualText = 0;
                actualTextUpperLimit = texts[actualText].length - upperLimit;
            }
            ;
            writterElement.innerHTML = prefix + texts[actualText].substr(0, actualIndex) + "<span class='writter-bar-" + writterElement.id + "'></span>" + sufix;
        }, speed);
    }
    stopWritter() {
        if (this.machineInterval)
            clearInterval(this.machineInterval);
    }
    setStyles(writterElement, customStyles, speed) {
        const styles = document.createElement('style');
        let elementStyles = customStyles;
        if (!customStyles) {
            elementStyles = `
                .written-text-${writterElement.id} {
                    position: relative;
                    font-size: 3rem;
                }

                .writter-bar-${writterElement.id} {
                    display: inline-block;
                    content: '';
                    width: 1px;
                    height: 3rem;
                    top: 0;
                    margin-left: 5px;
                    background-color: #343434;
                    animation: onoff ${speed * 2}ms linear infinite;
                }

                @keyframes onoff {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `;
        }
        writterElement.classList.add('written-text-' + writterElement.id || '');
        styles.innerHTML = elementStyles;
        document.head.append(styles);
    }
}
