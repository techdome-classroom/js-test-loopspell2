const decodeTheRing = function (s, p) {

  

};

module.exports = decodeTheRing;

/**
 * const decodeTheRing = function (s, p) {
    let sIndex = 0;
    let pIndex = 0;

    while (sIndex < s.length && pIndex < p.length) {
        if (p[pIndex] === '*') {
            // If we're at the end of the pattern, it matches the rest of the string
            if (pIndex === p.length - 1) return true;
            
            // Find the next non-* character in the pattern
            let nextChar = p[pIndex + 1];
            let nextCharIndex = s.indexOf(nextChar, sIndex);
            
            // If we can't find the next character, no match
            if (nextCharIndex === -1) return false;
            
            // Move string index to just before the next matching character
            sIndex = nextCharIndex;
            pIndex++;
        } else if (p[pIndex] === '?' || p[pIndex] === s[sIndex]) {
            sIndex++;
            pIndex++;
        } else {
            return false;
        }
    }

    // Check if we've reached the end of both the string and the pattern
    return sIndex === s.length && pIndex === p.length;
};

module.exports = decodeTheRing;
 */