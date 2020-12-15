import moment from 'moment';
import $ from 'jquery';

// Navbar monitor
// change nav background color and position on scroll
export const navBarMonitor = (navBarElement, styles) => {
    const nav = $(navBarElement);
    const distance = nav.offset().top;
    const $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance) {
            nav.addClass(styles.Active);
        } else {
            nav.removeClass(styles.Active);
        }
    })
}

// Format date from wordpress
export const formatDate = date => {
    return moment(date).format("D MMM YYYY")
}

// Shortens strings
export const extractor = (str, number = 15) => {
    let shortString;
    let array = str.split(' '); // turn to array
    shortString = array.slice(0, number).join(' ');
    shortString = array.length > number ? `${shortString}...` : shortString;
    return shortString;
};


export const shortenString = (string, limit) => {
    const newString = [];
    if (string.length > limit) {
        string.split(' ').reduce((acc, curr) => {
            if (acc + curr.length < limit) {
                newString.push(curr);
            }
            return acc + curr.length;
        }, 0);

        return `${newString.join(' ')} ...`;
    }

    return string;
}

/** Remove tags from html */
export const removeTags = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in  
    // the input string. Replacing the identified  
    // HTML tag with a null string. 
    return str.replace(/(<([^>]+)>)/ig, '');
}
