import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from '../providers/api-service/api.service';
import { TokenService } from '../providers/token-service/token.service';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tabIndex;
  save_username:any
  ngOnInit() {
    this.changeDetector.detectChanges()
    
  }


  myIndex: number;

  constructor(private route:ActivatedRoute,
    private router:Router,
    public tokenService:TokenService,
    public apiService:ApiService,
    public changeDetector:ChangeDetectorRef,
    
    ) {
   
  }

  ionViewDidEnter(){
    this.save_username = localStorage.getItem('save_username');

    console.log('tab25',this.save_username)
    if (this.save_username){
      console.log('111111111111111111111111111111111111111111111111111111111111')
      this.apiService.appStatus().subscribe(data=>{
        console.log('valid',data)
        var appStatus=data['appStatus']
        console.log('aa',appStatus)
        if(appStatus=='2'){
          this.router.navigate(['maintenance'])
        }
        else{
          this.router.navigate(['home'])

        }
    
      })
    }
    else{
      console.log('2222222222222222222222222222222222222222222222222222222222222')

      this.router.navigate(['login'])
    }

  }
}
