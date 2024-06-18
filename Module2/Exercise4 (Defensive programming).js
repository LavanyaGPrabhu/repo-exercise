/**The length of the word parameter cannot be less than 2.
* The length of the match parameter must be 1.
* The type of both the word and the match parameters must be string.
*/

function letterFinder(word, match) {
    try{
        if(word.length < 2) {
            throw new Error('The length of the word parameter cannot be less than 2.')
        }
        if(match.length !== 1) {
            throw new Error('The length of the match parameter must be 1.')
        }
        if(typeof word !== 'string' || typeof match !== 'string') {
            throw new Error('The type of both the word and the match parameters must be string.')
        }
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    catch(err){
        console.log('\nError: ', err.message)
    }
}
letterFinder('hello', 'e')
letterFinder('a', 'a')
letterFinder('hello', 'he')
letterFinder(3, 'e')