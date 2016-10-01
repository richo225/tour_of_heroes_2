import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
// initializes the platform the app runs in
// then uses the platform to bootstrap AppModule
