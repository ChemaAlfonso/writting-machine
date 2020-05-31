class WritterMachine {
    machineInterval: any;

    constructor( writterElement: HTMLElement, { texts:any = [''], speed = 250, lowerLimit = 0, upperLimit = 0 , endDelay = 0, prefix = '', sufix = '' } ) {
        if( writterElement )
            this.makeWritter( writterElement, texts, speed, prefix, sufix, lowerLimit, upperLimit, endDelay );
        else 
            throw new Error('HTML element was not provided');
    }

    private makeWritter( writterElement: HTMLElement, texts: string[], speed: number, prefix: string, sufix: string, lowerLimit: number, upperLimit: number, endDelay: number ) {
        let actualIndex = 0;
        let lastIndex   = actualIndex - 1;
        let actualText  = 0;
        let actualTextUpperLimit = texts[actualText].length - upperLimit;

        this.machineInterval = setInterval( () => {

            if( actualIndex > lastIndex ) 
                actualIndex++;
            else
                actualIndex--;

            // Reach the end of actual text
            if( actualIndex === actualTextUpperLimit ) lastIndex = actualTextUpperLimit + 1;
            
            // Returned to start of actual text
            if( actualIndex === lowerLimit ) {
                lastIndex = lowerLimit - 1;
                actualText ++;

                if( !texts[actualText] ) actualText = 0;
                
                actualTextUpperLimit = texts[actualText].length - upperLimit;
            };
            
            writterElement.innerHTML = prefix + texts[actualText].substr(0, actualIndex) + ( actualIndex % 2 === 0 ? '|' : '') + sufix;

        }, speed);
        
    }

    stopWritter(): void {
        if( this.machineInterval )
            clearInterval( this.machineInterval );
    }

    wait(ms: number){
        let start = new Date().getTime();
        let end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    
}

const writerElement: any[] = [...document.querySelectorAll('.written-text')];
const texts = ['Lorem, ipsum dolor', 'Adios', 'Hola', 'Que tal'];
writerElement.map( elm => new WritterMachine( elm, { texts , speed: 250, endDelay: 1000, prefix: 'Yeah! ', sufix: '...' } ));