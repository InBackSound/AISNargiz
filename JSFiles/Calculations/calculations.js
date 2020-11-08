"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLenght = void 0;
function verifyLenght(minvalue, maxvalue, resultvalue) {
    if (Number(minvalue) <= Number(resultvalue) && Number(maxvalue) >= Number(resultvalue)) { //вариант решения -  split, в массив 3 числа и в цикл сравнивтаь - прогонять по пор. номеру элемента массива
        return "correct";
    }
    else {
        return "wrong";
    }
}
exports.verifyLenght = verifyLenght;
