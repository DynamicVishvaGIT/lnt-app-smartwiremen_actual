import { Component, OnInit } from "@angular/core";
import { ApiService } from "../providers/api-service/api.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
})
export class AboutPage implements OnInit {
  about_us_content: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.about_us().subscribe(
      (data) => {
        this.about_us_content = data;
      },
      (error) => console.log(error)
    );
  }
  ionViewDidLoad() {}
}
