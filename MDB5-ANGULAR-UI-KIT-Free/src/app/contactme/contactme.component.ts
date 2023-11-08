import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent {

  emailInput: string;
  firstnameInput: string;
  lastnameInput: string;
  phoneInput: number;
  emailRegex: any = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  alphabeticNameRegex: any = /^[a-zA-Z]+$/;
  fonmIsvalid: boolean;

  constructor() { }

  sendForm() {
    // check if the email vaild
    const isEmailVaildConst = this.isValidEmail(this.emailInput);

    // check if the first name is vaild
    const isAlphabeticFirstName = this.isAlphabeticName(this.firstnameInput);

    // check if the last name is vaild
    const isAlphabeticLastName = this.isAlphabeticName(this.lastnameInput);

    // check if the phone number is vaild
    const phoneNumberCheck = this.isValidPhoneNumber(this.phoneInput);

    //If something is missing, alert will pop up.
    this.fonmIsvalid = this.popupAlert(isEmailVaildConst, isAlphabeticFirstName, isAlphabeticLastName, phoneNumberCheck);
    console.log(this.fonmIsvalid);
    if(this.fonmIsvalid){
      alert("Thank you, we'll contact you soon.");
    }

  }

  popupAlert(isEmailVaildConst: boolean, isAlphabeticFirstName: boolean, isAlphabeticLastName: boolean, phoneNumberCheck: boolean) {
    let alertPopup: string = "";
    if (!isEmailVaildConst || !isAlphabeticFirstName || !isAlphabeticLastName || !phoneNumberCheck) {
      if (!isEmailVaildConst) {
        alertPopup = "Email is invaild. "
      }
      if (!isAlphabeticFirstName) {
        alertPopup = alertPopup + "First name is invaild. "
      }
      if (!isAlphabeticLastName) {
        alertPopup = alertPopup + "Last name is invaild. "
      }
      if (!phoneNumberCheck) {
        alertPopup = alertPopup + "Phone number is invaild. "
      }
      alert(alertPopup);
    }    
    if (alertPopup.length == 0) return true; else return false;
  }

  isValidEmail(email: string) {
    if (email == null || email == undefined) return false;
    return this.emailRegex.test(email);
  }

  isAlphabeticName(name: string) {
    if (name == null || name == undefined) return false;
    if (name.length < 2) return false;
    return this.alphabeticNameRegex.test(name);
  }

  isValidPhoneNumber(phoneNumber: number) {
    // The input get only numbers
    // Check length
    if (phoneNumber == null || phoneNumber == undefined) return false;
    const stringNumber = phoneNumber.toString();
    if (stringNumber.length < 9) {
      return false;
    }
    return true;
  }


}
