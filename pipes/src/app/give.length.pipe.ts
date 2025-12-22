import {Pipe , PipeTransform} from "@angular/core";



@Pipe({
    name : "giveLength",
    standalone : true
})


export class GiveLength implements PipeTransform{
    transform(value : any , ...args : any[]){
        console.log(value , "values here")

        return value.length;
    }

}