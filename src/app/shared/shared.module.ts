import {NgModule} from "@angular/core";

// Shared
import {ConfigurationService} from "./configuration.service";

@NgModule({
    providers: [ConfigurationService]
})

export class SharedModule {}
