//Random.js
//version 1.0;
//created by Hassan Jehjah (h is pronounced);



const getRandom = {

    //get a random number from a range you define;

        number: function( min = 0, max = 1000 /*Number.MAX_SAFE_INTEGER*/ ) {

            if ( min >= 0 && max > min ) {

                return Math.floor( Math.floor( min ) + ( Math.floor( Math.random() * ( ( Math.floor( max + 1 ) ) - Math.floor( min ) ) ) ) );

            } else if ( min < 0 && max > min ) {

                return Math.floor(Math.floor( min ) + ( Math.floor( Math.random() * ( ( Math.floor( max + 1 ) ) - Math.floor( min ) ) ) ) );

            } else if ( max < min ) {

                console.error(`the minimum number is smaller than maximum number!`)

            };

    },

    //get random element from an array:

    element: function( array, min = 0, max = ( array.length - 1 ) ) {

        if ( Array.isArray( array ) ) {
    
            if ( ( min >= 0 && min < array.length - 1 && min <= max ) && ( max >= 0 && max <= array.length - 1 && max >= min ) ) {
    
                let index = randomNumber( min, max );
                return array[ index ];
    
            } else {
                console.error(
                    `
                    Make sure you follow the following rules: \n
                    1-The min, max number must be >= 0
                    2-The min, max number must be <= array.length
                    3-The min number must be <= max number
                    4-The max number must be >= min number
                    5-min, max are only integer
                    `
                );
            };
    
        } else {
    
            console.error(`${ array } is not an array!`);
    
        };
    },

    //get a random key from an object

    key: function( obj ) {

        let array = Object.keys( obj );

        if (Array.isArray(array)) {

            let index = randomNumber( 0, array.length - 1 )
            let randomIndex = array[ index ];

            return `${ randomIndex }`;

        } else {

            console.error(`${array} is not an array!`);

        };


    },

    //generate a random id;

    id: function( length = 0 ) {

        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890".split("");
        let alphabetCap = alphabet.toUpperCase().split("");

        let id = "";

        for ( i = 0; i <= length; i++ ) {

            threes = randomElement( alphabet.split("") ) + randomElement( numbers ) + randomElement( alphabetCap );

            if ( i < length ) {

                id += threes + "-";

            } else if ( i === length ) {

                id += threes;

            };

        };

        return id;

    },
    
    //get random Password:

    pass: function( length = 15, strong ) {

        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890".split("");
        let alphabetCap = alphabet.toUpperCase().split("");
        let symbols = `!£$%^&-_*@?`.split("");

        let collectionStrong = [ alphabet.split(""), numbers, alphabetCap, symbols ];
        let collectionWeak = [ alphabet.split(""), numbers ];

        let password = "";

        if ( length < 8 ) {

            console.error(`minimum length is 8`);

        } else if ( length >= 8 ) {

            mainLoop: for ( let i = 0; i <= length; i++ ) {

                if ( strong === true ) {

                    if ( i === 0 ) {

                        password += "-@";
                        i += 2;

                    };

                    if ( i >= 2 && i < length - 3 ) {

                        secondLopp: for ( x = 0; x < length - 3; x++ ) {

                            if (i < length - 3) {

                                let list = randomElement( collectionStrong );
                                let letter = randomElement( list );

                                password += letter;
                                i += 1;

                            };

                            if ( i === length - 3 ) {

                                break secondLopp;

                            };

                        };

                    };

                    if ( i === length - 3 ) {

                        password += "-@-";
                        i += 3;
                        break mainLoop;

                    };

                } else if ( strong === false ) {

                    if ( i === 0 ) {

                        password += "-@";
                        i += 2;

                    };

                    if ( i >= 2 && i < length - 3 ) {

                        secondLopp: for ( x = 0; x < length - 3; x++ ) {

                            if ( i < length - 3 ) {

                                let list = randomElement( collectionWeak );
                                let letter = randomElement( list );

                                password += letter;
                                i += 1;

                            };

                            if ( i === length - 3 ) {

                                break secondLopp;

                            };

                        };

                    };

                    if ( i === length - 3 ) {

                        password += "-@-";
                        i += 3;
                        break mainLoop;

                    };

                };

            };
        };

        return password;

    },

    //randomize an array => returns a randomized Set (will be fixed later);
    
    radnomizeArray: function ( array ) {

        let target = array;
    
        let resultArray = [];
    
        mainLoop:for ( i = 0; resultArray.length < target.length ; i++) {
    
            if ( array.length === 0 ) {
    
                break mainLoop;
    
            } else {
    
                if ( array.length === 1 ) {
    
                    resultArray.push( array[ 0 ] );
                    array.pop();
                    break mainLoop;
    
                } else {
    
                    let element = randomElement( array );
    
                    if ( !( resultArray.includes( element ) ) ) {
    
                        resultArray.push( element );
                        array = array.filter( ( ele ) => ele !== element );
                        
                    };
                };
                
            };
    
        };
    
        return resultArray;
    
    },

};










module.exports.getRandom = getRandom;
