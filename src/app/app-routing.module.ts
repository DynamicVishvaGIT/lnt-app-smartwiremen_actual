import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'add-lead-drawer',
    loadChildren: () => import('./add-lead-drawer/add-lead-drawer.module').then( m => m.AddLeadDrawerPageModule)
  },
  {
    path: 'advertisement',
    loadChildren: () => import('./advertisement/advertisement.module').then( m => m.AdvertisementPageModule)
  },
  {
    path: 'complaint',
    loadChildren: () => import('./complaint/complaint.module').then( m => m.ComplaintPageModule)
  },
  {
    path: 'forceupdate',
    loadChildren: () => import('./forceupdate/forceupdate.module').then( m => m.ForceupdatePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  
  {
    path: 'order-confirmation',
    loadChildren: () => import('./order-confirmation/order-confirmation.module').then( m => m.OrderConfirmationPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'passbook',
    loadChildren: () => import('./passbook/passbook.module').then( m => m.PassbookPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'projectdetail/:project_id',
    loadChildren: () => import('./projectdetail/projectdetail.module').then( m => m.ProjectdetailPageModule)
  },
  {
    path: 'project-lead',
    loadChildren: () => import('./project-lead/project-lead.module').then( m => m.ProjectLeadPageModule)
  },
  {
    path: 'projectlist',
    loadChildren: () => import('./projectlist/projectlist.module').then( m => m.ProjectlistPageModule)
  },
  {
    path: 'redeem',
    loadChildren: () => import('./redeem/redeem.module').then( m => m.RedeemPageModule)
  },
  {
    path: 'scancode',
    loadChildren: () => import('./scancode/scancode.module').then( m => m.ScancodePageModule)
  },
  {
    path: 'scanretailer',
    loadChildren: () => import('./scanretailer/scanretailer.module').then( m => m.ScanretailerPageModule)
  },
  {
    path: 'scheme',
    loadChildren: () => import('./scheme/scheme.module').then( m => m.SchemePageModule)
  },
  {
    path: 'scheme-detail',
    loadChildren: () => import('./scheme-detail/scheme-detail.module').then( m => m.SchemeDetailPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'verification/:mobile_no',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'view-order/:id',
    loadChildren: () => import('./view-order/view-order.module').then( m => m.ViewOrderPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'quizdetails',
    loadChildren: () => import('./quizdetails/quizdetails.module').then( m => m.QuizdetailsPageModule)
  },
  {
    path: 'addcounterboy',
    loadChildren: () => import('./addcounterboy/addcounterboy.module').then( m => m.AddcounterboyPageModule)
  },
  {
    path: 'scancounterboy',
    loadChildren: () => import('./scancounterboy/scancounterboy.module').then( m => m.ScancounterboyPageModule)
  },
  {
    path: 'kyc',
    loadChildren: () => import('./kyc/kyc.module').then( m => m.KycPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'tds',
    loadChildren: () => import('./tds/tds.module').then( m => m.TdsPageModule)
  },
  {
    path: 'kyca',
    loadChildren: () => import('./kyca/kyca.module').then( m => m.KycaPageModule)
  },
  {
    path: 'modaldisclaimer',
    loadChildren: () => import('./modaldisclaimer/modaldisclaimer.module').then( m => m.ModaldisclaimerPageModule)
  },
  {
    path: 'disclaimermodal',
    loadChildren: () => import('./disclaimermodal/disclaimermodal.module').then( m => m.DisclaimermodalPageModule)
  },
  {
    path: 'advertising',
    loadChildren: () => import('./advertising/advertising.module').then( m => m.AdvertisingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
