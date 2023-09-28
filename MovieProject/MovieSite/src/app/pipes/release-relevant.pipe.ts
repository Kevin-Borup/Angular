import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'releaseRelevant'
})
export class ReleaseRelevantPipe implements PipeTransform {
    constructor() {
    }

    transform(releaseDate: string): string {
        try {
            let formattedDate = releaseDate;
            const oneMonthAgo: Date = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

            let dateRelease = new Date(releaseDate);

            // + converts string to digit
            if (+oneMonthAgo < +dateRelease) {
                formattedDate = formattedDate.concat("***");
                formattedDate = this.makeBold(formattedDate)
            } else {
                formattedDate = this.makeItalics(formattedDate)

            }
            return formattedDate;
        } catch (e) {
            return releaseDate;
        }
    }

    makeItalics(str: string) {
        return '<i>' + str + '</i>';
    }
    makeBold(str: string) {
        return '<strong>' + str + '</strong>';
    }
}
