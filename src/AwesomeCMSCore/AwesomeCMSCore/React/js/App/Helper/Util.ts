export function navigateToUrl(url: Location) {
    window.location = url;
}

export function isDomExist(domName: string) {
    return document.getElementById(domName) !== null;
}

export function findObjectByKey(array: any, key: any, value: any): [] {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

