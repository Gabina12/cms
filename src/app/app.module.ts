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
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersService } from './services/orders.service';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/orders/details/details.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate: [AuthGuardGuard] },
  { path: 'categories', component: CategoriesMainComponent, canActivate: [AuthGuardGuard] },
  { path: 'categories/edit/:id', component: CategoriesEditComponent, canActivate: [AuthGuardGuard] },
  { path: 'categories/create', component: CategoriesCreateComponent, canActivate: [AuthGuardGuard] },
  { path: 'pages', component: PagesMainComponent, canActivate: [AuthGuardGuard] },
  { path: 'pages/edit/:id', component: PagesEditComponent, canActivate: [AuthGuardGuard] },
  { path: 'pages/create', component: PagesCreateComponent, canActivate: [AuthGuardGuard] },
  { path: 'file-manager', component: FileManagerComponent, canActivate: [AuthGuardGuard] },
  { path: 'file-manager/upload', component: FileManagerCreateComponent, canActivate: [AuthGuardGuard]},
  { path: 'cars', component: CarsMainComponent, canActivate: [AuthGuardGuard] },
  { path: 'cars/edit/:id', component: CarsEditComponent, canActivate: [AuthGuardGuard] },
  { path: 'cars/create', component: CarsCreateComponent, canActivate: [AuthGuardGuard] },
  { path: 'settings', component: SettingsMainComponent, canActivate: [AuthGuardGuard] },
  { path: 'settings/edit/:id', component: SettingsEditComponent, canActivate: [AuthGuardGuard] },
  { path: 'settings/create', component: SettingsCreateComponent, canActivate: [AuthGuardGuard] },
  { path: 'team', component: TeamMainComponent, canActivate: [AuthGuardGuard] },
  { path: 'team/edit/:id', component: TeamEditComponent, canActivate: [AuthGuardGuard] },
  { path: 'team/create', component: TeamCreateComponent, canActivate: [AuthGuardGuard] },
  { path: 'users', component: UsersMainComponent, canActivate: [AuthGuardGuard] },
  { path: 'users/edit/:id', component: UsersEditComponent, canActivate: [AuthGuardGuard] },
  { path: 'users/create', component: UsersCreateComponent, canActivate: [AuthGuardGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent},
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
    UsersEditComponent,
    OrdersComponent,
    LoginComponent,
    DetailsComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    DetailsComponent
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
    TeamService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
