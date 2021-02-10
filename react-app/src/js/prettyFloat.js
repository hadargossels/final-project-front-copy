export default function prettyFloat(value, precision, localize) {

    // https://github.com/dperish/prettyFloat.js
    // https://github.com/dperish/prettyFloat.js/blob/master/prettyFloat.js

    /**
     * prettyFloat.js - 1.2.0
     * The MIT License (MIT) - http://opensource.org/licenses/MIT
     */

    value = value || "";
    precision = precision || 0;
    localize = localize || false;

    var rounded,
        trimmed;

    rounded = (!isNaN(precision) && parseInt(precision, 10) > 0)
        ? parseFloat(value).toFixed(parseInt(precision, 10))
        : value;

    trimmed = parseFloat(rounded).toString();

    if (localize && !isNaN(trimmed)) {
        return parseFloat(trimmed).toLocaleString(localize);
    }

    return trimmed;
}