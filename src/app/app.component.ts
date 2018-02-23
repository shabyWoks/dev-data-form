import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    { type: 1, labelName: 'UserName: ', placeHolder: 'Username', inputProp: { type: 'text', id: 'username', minLen: "4", maxLen: "15", notAllowed: "$" }, validationText: "Looks Good!", inValidationText: "Enter Something" },
    { type: 1, labelName: 'Password: ', placeHolder: 'Password', inputProp: { type: 'password', id: 'pass', minLen: "4", maxLen: "15", notAllowed: "$" }, validationText: "Looks Good!", inValidationText: "Enter Something" },
    { type: 2, labelName: 'Gender: ', inputProp: { type: '', id: 'gender' }, options: [{ value: '0', key: 'Male' }, { value: '1', key: 'Female' }], inValidationText: "You forgot to mark something" , inline : false, mandatory: 1, noInOneLine: 1 },
    { type: 3, labelName: 'Gender: ', inputProp: { type: '', id: 'gender' }, options: [{ value: '0', key: 'Male' }, { value: '1', key: 'Female' }], inline : true, noInOneLine: 1 },
    { type: 4, labelName: 'Comment: ', inputProp: { type: '', id: 'comment', rowSize: '2' }, inValidationText: "Enter Something" },
    //{ type: 5, labelName: 'Image: ', inputProp: { type: '', id: 'image' }, inValidationText: "Enter Something" },
    { type: 6, labelName: 'Location: ', inputProp: { type: '', id: 'location' }, options: [{ value: '0', key: 'Chennai' }, { value: '1', key: 'Mumbai' }], inline : false, inValidationText: "Select Something" },
  ];
}
