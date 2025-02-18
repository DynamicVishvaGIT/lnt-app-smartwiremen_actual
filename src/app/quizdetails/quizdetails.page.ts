import { Component, OnInit } from '@angular/core';
import { ApiService } from "../providers/api-service/api.service";
import { AlertController, LoadingController, ToastController } from "@ionic/angular";
import { Router ,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quizdetails',
  templateUrl: './quizdetails.page.html',
  styleUrls: ['./quizdetails.page.scss'],
})
export class QuizdetailsPage implements OnInit {
  tran_please_wait: string = "Please Wait";
  video_link: any;
  questions: any;
  Video: any;
  attempt: any;
  answer_question: boolean = false;
  quiz_answer = [];
  valid_for_game: any;
  game_status: any;
  game_valid: any;
  constructor(
    public router: Router,
    public apiService: ApiService,
    public loadingCtrl: LoadingController,
    public toastCtrl:ToastController,
    public alertController:AlertController,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(["home"]);
  }
  handleResponse(data) {
    console.log(data);
    this.Video = data["Video"];
    this.questions = data["question"];
    console.log(this.questions);
    // this.refresher = null;
    this.loadingCtrl.dismiss();
  }
  ionViewWillEnter() {
    this.presentLoading()
    this.attempt = this.route.snapshot.queryParams["attempt"];
    this.apiService.quiz(this.attempt).subscribe(
      (data) => {
        this.handleResponse(data);
      },
      (error) => {
        this.handleError(error);
      }
    );
    this.apiService.validForGame().subscribe(data=>{
      console.log('valid',data)
    this.valid_for_game=data['game']['attempt'];
    this.game_status=data['game']['status'];
    this.game_valid=data['valid'];
  
    })
  }
  handleError(error) {
    this.loadingCtrl.dismiss();

    console.log(error);
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: "crescent",
      message: this.tran_please_wait + "...",
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }
  answerQuestions() {
    this.answer_question = !this.answer_question;
  }
  doRefresh(event) {
    console.log("here66");

    this.apiService.quiz(this.attempt).subscribe(
      (data) => {
        event.target.complete();
        this.handleResponse(data);
      },
      (error) => {
        event.target.complete();

        this.handleError(error);
      }
    );
  }
  submitQuestions() {
    if (this.quiz_answer.length > 0) {
      console.log(this.quiz_answer);
      if(this.game_status=='Inactive' && ( (this.valid_for_game=="0" || this.valid_for_game=="1" ||this.valid_for_game=="2" ))){
        var question = [];
        var answer = [];
        for (let i = 0; i < this.quiz_answer.length; i++) {
          var split_array = this.quiz_answer[i].split(",");
          answer.push(split_array[0]);
          question.push(split_array[1]);
        }
  
        console.log(question, answer);
        this.presentLoading();
        this.apiService.quiz_answer({"question":question.join(),"answer":answer.join(),"attempt":this.attempt}).subscribe(
          (data) => {
            this.handleSubmitResponse(data);
          },
          (error) => {
            this.handleSubmitError(error);
          }
        );
    }
    else if((this.valid_for_game=="1" || this.valid_for_game=="2" ||this.valid_for_game=="3") &&(this.game_status=='Active')){
      this.presentAlert("You have already played this game")
  
    }
    else if (this.valid_for_game=="3" && this.game_status=="Inactive"){
      this.presentAlert("You have already played this game")
  
    }
    else if (this.valid_for_game=="3" && this.game_status=="Active"){
      this.presentAlert("You have already played this game")
  
    }
    else{
        this.presentAlert("You have already played this game")
    }
    
    }
    else{
      this.presentToast('Please answer all questions')
    }
  }
  handleSubmitResponse(data) {
    this.apiService.validForGame().subscribe(data=>{
      console.log('valid',data)
    this.valid_for_game=data['game']['attempt'];
    this.game_status=data['game']['status'];
    this.game_valid=data['valid'];
  
    })
    console.log(data);
    if(data['ans']==1){
      this.presentIncorrectAlert(data['ans'] + " answer is correct" )

    }
    else if(data['ans']==5){
      this.presentWinAlert("You have won the game","You have earned "+data['point']+" points")
    }
    else{
      this.presentIncorrectAlert(data['ans'] + " answers are correct")

    }
    this.loadingCtrl.dismiss();
  }
  handleSubmitError(error) {
    this.loadingCtrl.dismiss();
    this.presentIncorrectAlert("All answers are incorrect")
    console.log(error);
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      position:"middle",
      duration: 3000
    });
    toast.present();
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      
      header: message,
      buttons:[{
        text: 'OK',
        handler: () => {
          this.router.navigate(['home'])
        }
      }],

      mode:"ios"
    });

    await alert.present();
  }
  async presentIncorrectAlert(message) {
    const alert = await this.alertController.create({
      
      header: message,
      buttons:[{
        text: 'OK',
        handler: () => {
          this.router.navigate(['home'])
        }
      }],

      mode:"ios"
    });

    await alert.present();
  }
  async presentWinAlert(message,message2) {
    const alert = await this.alertController.create({
      
      header: message,
      subHeader:message2,
      backdropDismiss:false,
      buttons:[{
        text: 'OK',
        handler: () => {
          this.router.navigate(['home'])
        }
      }],

      mode:"ios"
    });

    await alert.present();
  }
}
