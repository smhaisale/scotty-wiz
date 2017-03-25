import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from "./mail.service";
import { SocketService } from "./socket.service";
import { StompService } from 'ng2-stomp-service';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DialogSummaryComponent } from './dialog-summary/dialog-summary.component';
import { DialogInformationComponent } from './dialog-information/dialog-information.component';
import { DialogSummaryListComponent } from './dialog-summary-list/dialog-summary-list.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { ContainerComponent } from './container/container.component';
import { DialogActionsComponent } from './dialog-actions/dialog-actions.component';
import { DialogEntryComponent } from './dialog-entry/dialog-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    DialogSummaryComponent,
    DialogInformationComponent,
    DialogSummaryListComponent,
    UserInformationComponent,
    ContainerComponent,
    DialogActionsComponent,
    DialogEntryComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide:'mail', useClass:MailService},
    {provide:'socket', useClass:SocketService},
    {provide:'http', useClass:HttpModule}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
