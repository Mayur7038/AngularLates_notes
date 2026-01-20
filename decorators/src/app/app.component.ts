import { Component, ElementRef, HostBinding, ViewChild, viewChild, AfterViewInit } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ParameterDecoratorsComponent } from './parameter-decorators/parameter-decorators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ParameterDecoratorsComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ should be styleUrls (plural)
})
export class AppComponent implements AfterViewInit {
  title = 'decorators';

  /* -----------------------------------------------
   * 🟦 HostBinding → Binds class/property to host element
   * ------------------------------------------------ */
  @HostBinding('style.color') textColor = 'blue';

  /* ============================================================
   * 🟩 NEW WAY — Angular 17+ Signal-based ViewChild
   *    - Returns a reactive signal
   *    - Call with () to access value
   * ============================================================ */
  parentComp = viewChild(ParentComponent);
  button = viewChild<ElementRef<HTMLButtonElement>>('btnRef');

  /* ============================================================
   * 🟧 OLD WAY — Pre-Angular 17 Decorator syntax (commented)
   *    - Use if your Angular version < 17
   * ============================================================ */
  // @ViewChild(ParentComponent) parentComp!: ParentComponent;
  // @ViewChild('btnRef') button!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    /* ---------- NEW SIGNAL-BASED ACCESS ---------- */
    const parent = this.parentComp();
    const btn = this.button();

    if (parent) parent.sayHello();
    if (btn) console.log('Button Text:', btn.nativeElement.textContent);

    /* ---------- OLD DECORATOR-BASED ACCESS ----------
    this.parentComp.sayHello();
    console.log('Button Text:', this.button.nativeElement.textContent);
    -------------------------------------------------- */
  }
}
