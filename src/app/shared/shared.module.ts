import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//export components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//Router
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ToolbarComponent,
  ]
})
export class SharedModule { }
