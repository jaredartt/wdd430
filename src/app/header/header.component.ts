
// These two are necessary to make Angular understand you want a component here.
// import { Component } from "@angular/core";
// @Component()

// Everything inside @Component() is to configure this component, in javascript.

// The 'selector' is so we can use this component, it's a name we give. We
// used 'app-header' so we don't use 'header', because that name's a keyword.

// The 'templateUrl' refers to the html where the component is made.

// !!! Remember to register all features (components) into the root 'app.module.ts', because
// you didn't use CLI to create de component, it wasn't added there automatically.

// To generate a component automatically, in the terminal type 'ng generate component name'
// or just 'ng g c name'.

import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

}