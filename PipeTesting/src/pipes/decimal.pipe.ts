import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

    transform(value: number): string {
        let valString = value.toString();
        let seperatorPos:number = valString.lastIndexOf(".");
        let formattedNumber: string;

        if (seperatorPos < 0) {
            formattedNumber = valString.concat(".000");
        } else {
            let numAfterSep = valString.length - 1 - seperatorPos
            let zerosToAdd: number = 3 - numAfterSep;

            formattedNumber = valString.padEnd(valString.length + zerosToAdd, "0");
        }
        return formattedNumber;
    }

}
