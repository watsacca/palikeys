import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ScoreService} from './score/score.service';
import {LessonComponent} from './lesson/lesson.component';
import {LessonService} from './lesson/lesson.service';
import {FormsModule} from '@angular/forms';
import {LessonViewComponent} from './lesson/lesson-view/lesson-view.component';
import {HttpClientModule} from '@angular/common/http';
import {ScoreListComponent} from './score/score-list/score-list.component';
import {InfoComponent} from './info/info.component';
import {UserDialogComponent} from './user/user-dialog.component';
import {HelpComponent} from './help/help.component';
import {GdprSnackBarComponent} from './gdpr-snack-bar/gdpr-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    LessonViewComponent,
    ScoreListComponent,
    InfoComponent,
    UserDialogComponent,
    HelpComponent,
    GdprSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  entryComponents: [
    UserDialogComponent,
    GdprSnackBarComponent
  ],
  providers: [ScoreService, LessonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
