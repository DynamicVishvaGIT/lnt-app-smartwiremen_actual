import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-otp-input',
  templateUrl: './custom-otp-input.component.html',
  styleUrls: ['./custom-otp-input.component.scss'],
})
export class CustomOtpInputComponent implements OnInit {

  @Input() length: number = 4;
  @Output() otpChange = new EventEmitter<string>();
  otpArray: string[] = [];

  constructor() { }

  ngOnInit() {
    this.otpArray = Array(this.length).fill('');
  }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.slice(0, 1);
    // console.log(`Input event at index ${index}: ${value}`);
    // this.otpArray[index] = value;
    // input.value = value; // Ensure the input field value is updated correctly

    // if (value && index < this.length - 1) {
    //   this.focusNextInput(index);
    // }
  if (value && index==0) {
    // this.otpArray[index] = '';
    // input.value = ''; // Clear the current input field
    this.otpArray[index] = value;
    input.value = this.otpArray[index];
    this.otpArray[index + 1] = '';
    input.value = this.otpArray[index+1];
    this.focusNextInput(index-1);
  } 
  else if (index > 0) {
    if (value && index < this.length - 1) {
      this.otpArray[index] = value;
      input.value = this.otpArray[index];
      this.otpArray[index + 1] = '';
      input.value = this.otpArray[index+1];
      this.focusNextInput(index);
    }
    else if (value && index == this.length - 1) {
      this.otpArray[index] = value;
      input.value = this.otpArray[index];
      // this.otpArray[index + 1] = '';
      // input.value = this.otpArray[index+1];
      // this.focusNextInput(index);
    }
  }
  this.emitOtpChange();
}

// onInput(event: Event, index: number): void {
//   console.log(index);
//     const input = event.target as HTMLInputElement;
//     console.log(input.value);
//     const value = input.value;
//     if (input.value.length > 1) {
//       input.value = input.value.slice(0, 1);
//     }
//     console.log(this.length)
//     if (index < this.length - 1 && value) {
//       this.focusNextInput(index);
//     }
//     else if (index <= this.length && !value){
//       this.focusPreviousInput(index+1);
//     }

//     this.emitOtpChange();
// }

  onKeydown(event: KeyboardEvent, index: number): void {
    // console.log(index);
    // console.log(this.otpArray[index]);
    // console.log(index);
    // console.log(this.otpArray[index]);
    if (event.key === 'Backspace') {
      event.preventDefault();
      const input = event.target as HTMLInputElement;
      if (input.value) {
        this.otpArray[index] = '';
        input.value = ''; // Clear the current input field
        this.focusPreviousInput(index+1);
      } else if (index > 0) {
        this.focusPreviousInput(index);
        this.otpArray[index - 1] = '';
        const previousInput = document.querySelectorAll<HTMLInputElement>('input')[index - 1];
        if (previousInput) {
          previousInput.value = ''; // Clear the previous input field
          setTimeout(() => {
            previousInput.focus();
            previousInput.select(); // Select the previous input field after a brief delay
          }, 0);
        }
      }
      this.emitOtpChange();
    }
  }

  // onKeydown(event: KeyboardEvent, index: number): void {
  //   if (event.key === 'Backspace') {
  //     if (index==this.length-1) {alert('1');
  //       const input = event.target as HTMLInputElement;
  //       input.value = '';
  //       this.focusPreviousInput(index);
  //     } 
  //     else if (index > 0) {
  //       this.otpArray[index - 1] = '';
  //       this.focusPreviousInput(index - 1);
  //     }
  //     this.emitOtpChange();
  //   }
  //   if (event.key === 'Backspace' && !this.otpArray[index] && index > 0) {
  //     this.otpArray[index - 1] = '';
  //     this.focusPreviousInput(index);
  //     this.emitOtpChange();
  //   }
  // }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text') || '';
    const otpValues = pastedData.split('').slice(0, this.length);
    this.otpArray = otpValues.concat(Array(this.length - otpValues.length).fill(''));
    this.emitOtpChange();
  }

  focusNextInput(index: number): void {
    const nextInput = document.querySelectorAll<HTMLInputElement>('input')[index + 1];
    if (nextInput) {
      nextInput.focus();
      setTimeout(() => {
        nextInput.select(); // Select the previous input field after a brief delay
      }, 0);
    }
  }

  focusPreviousInput(index: number): void {
    // console.log(index);
    const previousInput = document.querySelectorAll<HTMLInputElement>('input')[index-1];
    if (previousInput) {
      previousInput.focus();
      setTimeout(() => {
        previousInput.select(); // Select the previous input field after a brief delay
      }, 0);
    }
  }

  onInputFocus(target: EventTarget | null): void {
    if (target instanceof HTMLInputElement) {
      setTimeout(() => {
        target.select(); // Select the focused input field after a brief delay
      }, 0);
    }
  }

  emitOtpChange(): void {
    console.log('Current OTP Array:', this.otpArray);
    // this.otpChange.emit(this.otpArray.join(''));
  }

}
