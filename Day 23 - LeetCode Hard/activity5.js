// ! Word Ladder

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0; 

    const wordSet = new Set(wordList);
    const queue = [[beginWord, 1]]; 
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        for (let i = 0; i < currentWord.length; i++) {
            for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
                const nextWord = currentWord.slice(0, i) + String.fromCharCode(charCode) + currentWord.slice(i + 1);

                if (nextWord === endWord) return level + 1;
                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, level + 1]);
                }
            }
        }
    }

    return 0;
}

const beginWord = "hot";
const endWord = "dog";
const wordList = ["hot", "dot", "dog", "lot", "log"];
console.log(ladderLength(beginWord, endWord, wordList)); //* Output: 3
