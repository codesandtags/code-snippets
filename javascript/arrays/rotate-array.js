/**
 * Rotate the elements in an array to the right side
 * @param elements
 * @param rotation
 * @returns {string}
 */
function rotateRight(elements, rotation) {
    var result = [],
        index;

    if (rotation) {
        for (var x = 0; x < elements.length; x++) {
            index = (elements.length - rotation - x) % elements.length;

            if (index < 0) {
                index += elements.length;
            }

            result.push(elements[index]);
        }
    }

    return result.join(' ');
}

/**
 * Rotate the elements in an array to the right side
 * @param elements
 * @param rotation
 * @returns {string}
 */
function rotateLeft(elements, rotation) {
    var result = [],
        index;

    if (rotation) {
        for (var x = 0; x < elements.length; x++) {
            index = (x + rotation) % elements.length;
            result.push(elements[index]);
        }
    }

    return result.join(' ');
}

// Test
var numbers = [1, 2, 3, 4, 5];

// Rotate 1 position to right
rotateRight(numbers, 1);

// Rotate 1 position to left
rotateLeft(numbers, 1);
