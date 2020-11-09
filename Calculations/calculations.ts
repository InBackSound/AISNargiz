
export function verifyLenght(minvalue: string, maxvalue: string, resultvalue:number): string {// работает, только если параметр - 1 абзац. иначе неверно, тк программа генерит кол-во символов в абзаце
    if (Number(minvalue) <= Number(resultvalue)  &&  Number(maxvalue) >= Number(resultvalue)){  //вариант решения -  split, в массив 3 числа и в цикл сравнивтаь - прогонять по пор. номеру элемента массива
        return "correct"
    }
    else {
        return "wrong"
    }
}
