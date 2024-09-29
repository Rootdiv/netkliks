import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    SearchComponent,
    SidebarComponent,
    SidebarItemComponent,
    CatalogPageComponent,
    FilmPageComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
