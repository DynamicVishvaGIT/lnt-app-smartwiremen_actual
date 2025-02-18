import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController, ToastController } from "@ionic/angular";
import { ApiService } from "../providers/api-service/api.service";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
})
export class QuizPage implements OnInit {
  tran_please_wait: string = "Please Wait";
  video_link: any;
  questions: any;
  Video: any;
  answer_question: boolean = false;
  quiz_answer = [];
  attempt: any;

  constructor(
    public router: Router,
    public apiService: ApiService,
    public loadingCtrl: LoadingController,
    public sanitizer: DomSanitizer,
    public toastCtrl:ToastController,
    public alertController:AlertController,
    private route:ActivatedRoute,


  ) {}

  ngOnInit() {}
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
    this.router.navigate(['quizdetails'],{queryParams:{'attempt':this.attempt}})
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
      var question = [];
      var answer = [];
      for (let i = 0; i < this.quiz_answer.length; i++) {
        var split_array = this.quiz_answer[i].split(",");
        answer.push(split_array[0]);
        question.push(split_array[1]);
      }

      console.log(question, answer);
      this.presentLoading();
      this.apiService.quiz_answer({"question":question.join(),"answer":answer.join()}).subscribe(
        (data) => {
          this.handleSubmitResponse(data);
        },
        (error) => {
          this.handleSubmitError(error);
        }
      );
    }
    else{
      this.presentToast('Please answer all questions')
    }
  }
  handleSubmitResponse(data) {
    console.log(data);
    if(data==1){
      this.presentAlert(data + "answer is correct" )

    }
    else{
      this.presentAlert(data + " answers are correct")

    }
    this.loadingCtrl.dismiss();
  }
  handleSubmitError(error) {
    this.loadingCtrl.dismiss();
    this.presentAlert("All answers are incorrect")
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
      buttons: ['OK'],
      mode:"ios"
    });

    await alert.present();
  }

}
