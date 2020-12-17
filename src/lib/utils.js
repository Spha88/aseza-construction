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

// Icon placer 
export const iconPlacer = (string) => {
    string = string.toLowerCase();
    console.log(string);
    if (string.includes('contact')) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z" /></svg>
    }
    if (string.includes('service')) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v22h-20v-22h3c1.23 0 2.181-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.552 0-1 .448-1 1zm9 1h-4l-2 2h-3.897l-2.103-2h-4v18h16v-18zm-13 9.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z" /></svg>
    }
    if (string.includes('about')) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 14.828v9.172h18v-9.172l-9-8.375-9 8.375zm11 7.172h-4v-6h4v6zm10-9.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" /></svg>
    }
    if (string.includes('team')) {
        return <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6.72 20.492c1.532.956 3.342 1.508 5.28 1.508 1.934 0 3.741-.55 5.272-1.503l1.24 1.582c-1.876 1.215-4.112 1.921-6.512 1.921-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm6.405-.992l-.594.391c-.077.069-.19.109-.307.109h-.447c-.118 0-.231-.04-.308-.109l-.594-.391h2.25zm10.875-.5h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm-18 0h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm7.146-.5c.138 0 .25.112.25.25s-.112.25-.25.25h-2.279c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h2.279zm.247-.5c0-2.002 1.607-2.83 1.607-4.614 0-1.86-1.501-2.886-3.001-2.886s-2.999 1.024-2.999 2.886c0 1.784 1.607 2.639 1.607 4.614h2.786zm7.607-6c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm-18 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm12.87 2.385l1.349.612-.413.911-1.298-.588c.15-.3.275-.608.362-.935zm-7.739 0c.087.332.208.631.36.935l-1.296.588-.414-.911 1.35-.612zm9.369-1.885v1h-1.501c.01-.335-.02-.672-.093-1h1.594zm-9.406 0c-.072.327-.102.663-.092.997v.003h-1.502v-1h1.594zm6.928-1.714l1.242-.882.579.816-1.252.888c-.146-.291-.335-.566-.569-.822zm-6.044-.001c-.23.252-.418.525-.569.823l-1.251-.888.578-.816 1.242.881zm4.435-1.046l.663-1.345.897.443-.664 1.345c-.278-.184-.58-.332-.896-.443zm-2.826-.001c-.315.11-.618.258-.897.442l-.663-1.343.897-.443.663 1.344zm-2.587-9.054v2.149c-2.938 1.285-5.141 3.942-5.798 7.158l-2.034-.003c.732-4.328 3.785-7.872 7.832-9.304zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003c-.657-3.216-2.86-5.873-5.798-7.158v-2.149zm-3.5 8.846c-.334-.039-.654-.041-1-.001v-1.529h1v1.53zm2.5-2.53h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414zm-3-7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z" /></svg>
    }
    return '';
}
