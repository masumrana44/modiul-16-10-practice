function islepyear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }

}

const lipyear = islepyear(1962);
console.log(lipyear);

const lipyear1 = islepyear(1992);
console.log(lipyear1);

const lipyear2 = islepyear(1844);
console.log(lipyear2);
