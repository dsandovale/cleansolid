(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    /*
    function isRedFruit( fruit: string ): boolean {
        
        if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
            return true;
        } else {
            return false;
        }
    }
    */
    function isRedFruit( fruit: string ): boolean {
        let redFruit = ['manzana', 'cereza', 'ciruela'];
        return redFruit.some((element) => element === fruit);
    }

    //Solución Curso
    /*function isRedFruit( fruit: string ): boolean {
        let redFruit = ['manzana', 'cereza', 'ciruela'];
        return redFruit.includes(fruit);
    }*/

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    /*
    function getFruitsByColor( color: string ): string[] {

        if ( color === 'red' ) {
            return ['manzana','fresa'];
        } else if ( color === 'yellow') {
            return ['piña','banana'];
        } else if ( color === 'purple') {
            return ['moras','uvas']
        } else {
            throw Error('the color must be: red, yellow, purple');
        }
    }
    */
    function getFruitsByColor( color: string ): string[] {
        const fruit = {
          redFruits: {
            color: 'red',
            fruits: ['manzana','fresa']
          },
          yellowFruits: {
            color: 'yellow',
            fruits: ['piña','banana']
          },
          purpleFruits: {
            color: 'purple',
            fruits: ['moras','uvas']
          },
        };
        switch (color) {
          case fruit.redFruits.color:
            return fruit.redFruits.fruits;
          case fruit.yellowFruits.color:
            return fruit.yellowFruits.fruits;
          case fruit.purpleFruits.color:
            return fruit.purpleFruits.fruits;
          default:
            throw Error('the color must be: red, yellow, purple');
        }
    }

    //Solución Curso
    // type FruitColor = 'red'|'yellow'|'purple'
    // function getFruitsByColor( color: FruitColor ): string[] {
    //   const fruitsByColor = {
    //     red: ['manzana','fresa'],
    //     yellow: ['piña','banana'],
    //     purple: ['moras','uvas'],
    //   };
    //   if ( !Object.keys( fruitsByColor ).includes(color) ) {
    //     throw Error('the color must be: red, yellow, purple');
    //   }
    //   return fruitsByColor[color]
    // };

    // Simplificar esta función
    
    /*
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }
    }
    */

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        let resutlSteps;
        resutlSteps = isFirstStepWorking == false ? 'First step broken.' 
                      : isSecondStepWorking == false ? 'Second step broken.'
                      : isThirdStepWorking == false ? 'Third step broken.'
                      : isFourthStepWorking == false ? 'Fourth step broken.'
                      : 'Working properly!';
        return resutlSteps;
    }

    //Solución Curso
    /*function workingSteps() {
        if ( !isFirstStepWorking ) return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking ) return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';
        return 'Working properly!';
    }*/


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();

