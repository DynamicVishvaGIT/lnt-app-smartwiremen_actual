import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { TokenService } from '../token-service/token.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //  private baseUrl = 'https://smartwiremen.com/api/auth';
    private baseUrl = 'https://smartwiremen.com/api/auth';
    private anotherBaseUrl = 'https://dev.dvadminpanel.in/groapi/apifile';
  //  private baseUrl = 'https://smartwiremen.socialtitli.com/api/auth';
  //  private baseUrl = 'https://abc.socialtitli.co.in/api/auth';
  //  private baseUrl = 'http://localhost:8000/api/auth';
   accessToken : string; 
  constructor(
    public http: HttpClient,
    public http_native: HTTP,
    public tokenService: TokenService,
  ) { }
  home() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/me`,{'token' : this.accessToken})
  }

  about_us() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/about_us`,{'token' : this.accessToken})
  }

  gifts(current_page) {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/gifts?page=${current_page}`,{'token' : this.accessToken})
  }

  refresh_access_token(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/refresh`,{'token' : this.accessToken})
  }

  send_order_otp(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/sendOrderOTP`,{'token' : this.accessToken})
  }

  send_otp(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/sendOTP`,{'token' : this.accessToken})
  }

  verify_otp(code){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/verifyOTP`,{'token' : this.accessToken,'otp' : code})
  }

  submitQrCode(code) {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/submitQrCode`,{'token' : this.accessToken,'code' : code})
  }   
  
  redeemGiftOTP(data) {
    console.log('redee',data)
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/redeemGiftOTP`,data)
  }

  redeemGift(data) {
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/redeemGift`,data)
  }

  professions() {
    return this.http.post(`${this.baseUrl}/professions`,{})
  }
  
  prof_qualifications() {
    return this.http.post(`${this.baseUrl}/prof_qualifications`,{})
  }

  states() {
    return this.http.post(`${this.baseUrl}/states`,{})
  }

  cities(state_id) {
    return this.http.post(`${this.baseUrl}/cities?state_id=${state_id}`,{})
  }

  saveOneSignalPlayerId(data) {
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/updatePlayerId`,data)
  }

  updateProfile(data) {
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/updateProfile`,data)
  }

  loadTypes() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/issueTypes`,{'token' : this.accessToken})
  }

  submitTicket(data) {
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/submitTicket`,data)
  }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data,{})
  }
  
  schemes() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/schemes`,{'token' : this.accessToken})
  }

  orders() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/orders`,{'token' : this.accessToken})
  }

  setTokenOptions(){
    let token = this.tokenService.get();
    this.accessToken = token;
    return this.accessToken;
  }

  validatePurchase(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/bank`,{'token' : this.accessToken})
  }

  uploadImage(url,data){
    
    return this.http.post(url,data);
  }

  passbookDetails(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/userredeem`,{'token' : this.accessToken})
  }
  consultant_architect_builder(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/fetch_consultant_architect_builder`,{'token' : this.accessToken})
  }
  distributors_contractor_decisionmaker(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/fetch_distributors_contractor_decisionmaker`,{'token' : this.accessToken})
  }
  developer_houseowner(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/fetch_developer_houseowner`,{'token' : this.accessToken})
  }
  competition(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/competition`,{'token' : this.accessToken})
  }
  project_stage(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/project_stage`,{'token' : this.accessToken})
  }
  project_source(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/project_source`,{'token' : this.accessToken})
  }
  projectList(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/fetchlead`,{'token' : this.accessToken})
  }
  projectDetails(projectid){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/lead_details`,{'token' : this.accessToken,"projectid":projectid})
  }
  addLeadUser(data) {
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/lead_user`, data)
  }
  addProject(data) {
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/addlead`, data)
  }
  parentId(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/parentid`,{'token' : this.accessToken})
  }

  checkRetailerID(code){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/check_retailer_id`,{'token' : this.accessToken,'code' : code})
  }
  checkActivity(){
    this.setTokenOptions();

    return this.http.post(`${this.baseUrl}/activity`,{'token' : this.accessToken})

  }
  firstLogin(){
    this.setTokenOptions();

    return this.http_native.post(`${this.baseUrl}/firstlogin`,{'token' : this.accessToken},{})
  }
  mapRetailer(code) {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/map_retailer`,{'token' : this.accessToken,'code' : code})
  } 
  lastRetailer() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/last_retailer`,{'token' : this.accessToken})
  } 
  nextGift() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/nextgift`,{'token' : this.accessToken})
  } 
  userRetailerList(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/user_retailer_list`,{'token' : this.accessToken})
  }
  quiz(attempt){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/game_question`,{'token' : this.accessToken,'attempt':attempt})
  }
  validForGame(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/valid_for_game`,{'token' : this.accessToken})
  }
  quiz_answer(data){
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/game_answer`,data)
  }
  sendNotification(data){
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/sendnotification`,data)
  }
  addRestriction(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/add_restriction_in_gift`,{'token' : this.accessToken})
  }
  mapRetailerManual(retailerid) {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/map_retailer_manual`,{'token' : this.accessToken,'retailerid' : retailerid})
  } 
  user_bank_upi(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/user_bank_upi`,{'token' : this.accessToken})
  }
  order_details(orderId){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/order_details`,{'token' : this.accessToken,'id':orderId})
  }
  edit_upi(data){
    this.setTokenOptions();
    data['token'] = this.accessToken;

    return this.http.post(`${this.baseUrl}/edit_upi`,data)
  }
  edit_bank(data){
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.baseUrl}/edit_bank`,data)
  }
  lastCounterBoy() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/last_counter_boy`,{'token' : this.accessToken})
  } 
  userCounterBoyList(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/user_counter_list`,{'token' : this.accessToken})
  }
  mapCounterBoy(username) {
    console.log(username)
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/map_counter_boy`,{'token' : this.accessToken,'username' : username})
  } 
  mapCounterBoyManual(counterboyid) {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/map_counter_boy_manual`,{'token' : this.accessToken,'counterboyid' : counterboyid})
  } 
  appStatus() {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/appStatus`,{'token' : this.accessToken})
  } 

  submitQrCodeTest(code,counter_boy_id) {
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/scanQrTest`,{'token' : this.accessToken,'code':code,'counterBoy':counter_boy_id})
  } 

  userfetchKycstatus(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/fetchKycstatus`,{'token' : this.accessToken})
  }
  userfetchTds(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/fetch_tds`,{'token' : this.accessToken})
  }
  userfetchTdspoints(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/fetch_tds_points`,{'token' : this.accessToken})
  }
  fetchKyc(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/fetchKyc`,{'token' : this.accessToken})
  }
  fetchAds(){
    this.setTokenOptions();
    return this.http.post(`${this.baseUrl}/fetch_ads`,{'token' : this.accessToken})
  }
  uploadKyc(url,data) {
    return this.http.post(url,data);
  }

  create_payout(data){
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.anotherBaseUrl}/create_payout`,data)
  }

  get_payout_details(){
    this.setTokenOptions();
    return this.http.post(`${this.anotherBaseUrl}/get_payout_details`,{'token' : this.accessToken})
  }

  validate_vps(data){
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.anotherBaseUrl}/validate_vps`,data)
  }

  validate_pan(data){
    this.setTokenOptions();
    data['token'] = this.accessToken;
    return this.http.post(`${this.anotherBaseUrl}/validate_pan`,data)
  }
}

