import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user/:userId',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'user-edit/:userId',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'article/:articleId',
    loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule)
  },
  
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'article-edit/:articleId',
    loadChildren: () => import('./article-edit/article-edit.module').then( m => m.ArticleEditPageModule)
  },
  {
    path: 'article-edit',
    loadChildren: () => import('./article-edit/article-edit.module').then( m => m.ArticleEditPageModule)
  },
  {
    path: 'article-create',
    loadChildren: () => import('./article-create/article-create.module').then( m => m.ArticleCreatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
