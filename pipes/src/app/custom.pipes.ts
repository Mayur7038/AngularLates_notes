import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'customPipe',
    standalone : true
})

export class CustomPipe implements PipeTransform {

    transform(value : any , ...args: any[]) {
        console.log(value , "values of he" , args , "values of the arguments")

        return `$ ${value}`
    }



}