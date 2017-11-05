import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatDatepickerModule, MAT_DATE_LOCALE, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiselectDropdownModule } from 'ng2-multiselect';
import { DatePipe } from '@angular/common'
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoriesMainComponent } from './components/categories/categories-main/categories-main.component';
import { CategoriesEditComponent } from './components/categories/categories-edit/categories-edit.component';
import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';
import { PagesMainComponent } from './components/pages/pages-main/pages-main.component';
import { PagesEditComponent } from './components/pages/pages-edit/pages-edit.component';
import { PagesCreateComponent } from './components/pages/pages-create/pages-create.component';
import { CategoryService } from './services/categories.service';
import { PagesService } from './services/pages.service';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { CarsMainComponent } from './components/cars/cars-main/cars-main.component';
import { CarsCreateComponent } from './components/cars/cars-create/cars-create.component';
import { CarsEditComponent } from './components/cars/cars-edit/cars-edit.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { CarsService } from './services/cars.service';
import { SettingsMainComponent } from './components/settings/settings-main/settings-main.component';
import { SettingsCreateComponent } from './components/settings/settings-create/settings-create.component';
import { SettingsEditComponent } from './components/settings/settings-edit/settings-edit.component';
import { SettingsService } from './services/settings.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { FileManagerService } from './services/file-manager.service';
import { FileManagerCreateComponent } from './components/file-manager/file-manager-create/file-manager-create.component';
import { TeamMainComponent } from './components/team/team-main/team-main.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamEditComponent } from './components/team/team-edit/team-edit.component';
import { TeamService } from './services/team.service';
import { UsersMainComponent } from './components/users/users-main/users-main.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent/*, canActivate: [AuthGuardGuard] */},
  { path: 'categories', component: CategoriesMainComponent },
  { path: 'categories/edit/:id', component: CategoriesEditComponent },
  { path: 'categories/create', component: CategoriesCreateComponent },
  { path: 'pages', component: PagesMainComponent },
  { path: 'pages/edit/:id', component: PagesEditComponent },
  { path: 'pages/create', component: PagesCreateComponent },
  { path: 'file-manager', component: FileManagerComponent },
  { path: 'file-manager/upload', component: FileManagerCreateComponent},
  { path: 'cars', component: CarsMainComponent },
  { path: 'cars/edit/:id', component: CarsEditComponent },
  { path: 'cars/create', component: CarsCreateComponent },
  { path: 'settings', component: SettingsMainComponent },
  { path: 'settings/edit/:id', component: SettingsEditComponent },
  { path: 'settings/create', component: SettingsCreateComponent },
  { path: 'team', component: TeamMainComponent },
  { path: 'team/edit/:id', component: TeamEditComponent },
  { path: 'team/create', component: TeamCreateComponent },
  { path: 'users', component: UsersMainComponent },
  { path: 'users/edit/:id', component: UsersEditComponent },
  { path: 'users/create', component: UsersCreateComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    ErrorComponent,
    CategoriesMainComponent,
    CategoriesEditComponent,
    CategoriesCreateComponent,
    PagesMainComponent,
    PagesEditComponent,
    PagesCreateComponent,
    FileManagerComponent,
    CarsMainComponent,
    CarsCreateComponent,
    CarsEditComponent,
    ConfirmDialogComponent,
    SettingsMainComponent,
    SettingsCreateComponent,
    SettingsEditComponent,
    FileManagerCreateComponent,
    TeamMainComponent,
    TeamCreateComponent,
    TeamEditComponent,
    UsersMainComponent,
    UsersCreateComponent,
    UsersEditComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MultiselectDropdownModule,
    DateValueAccessorModule
  ],
  providers: [
    CategoryService, 
    PagesService,
    CarsService,
    SettingsService,
    AuthGuardGuard,
    AuthService,
    UserService,
    FileManagerService,
    {provide: MAT_DATE_LOCALE, useValue: 'ka-GE'},
    DatePipe,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
