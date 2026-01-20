import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { APP_CONFIG, AppConfig } from './app.config';
// import { LoggerService } from './logger.service';
@Component({
  selector: 'app-parameter-decorators',
  standalone: true,
  imports: [],
  templateUrl: './parameter-decorators.component.html',
  styleUrl: './parameter-decorators.component.css'
})
export class ParameterDecoratorsComponent {

  constructor(private http: HttpClient,
    // @Inject(APP_CONFIG) public config: AppConfig,
    // Because Angular’s DI by default uses types (like HttpClient), but tokens (like APP_CONFIG) aren’t types, so you must explicitly use @Inject().
// @Optional() private logger?: LoggerService,
// @Self() private myService: MyService, //Tells Angular to look only in the current injector (not parent components/modules).
    // @SkipSelf() private parentService: MyService // Tells Angular to skip the current injector and search in parent injectors.
  ) {
    console.log('HttpClient injected successfully!');

    // In this example:

    // Angular sees that HttpClient is needed in the constructor.
    // It automatically injects an instance of it.
    // But behind the scenes, this works because Angular uses parameter decorators like @Inject() and @Optional().


    //  if (this.logger) {
    //   this.logger.log('Logger available!');
    // } else {
    //   console.warn('LoggerService not provided!');
    // }

  }

}
