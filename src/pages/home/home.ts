import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Users ={

}
   public form 			: FormGroup;  

   constructor(public navCtrl 		: NavController,
               public navParams 	: NavParams,
               private _FB          : FormBuilder)
   {

      this.form = this._FB.group({
        username:['',[Validators.required,Validators.minLength(8)]],
        password:['',[Validators.required,Validators.maxLength(6)]],
         name    : ['', Validators.required],

         Skills     : this._FB.array([
            this.initTechnologyFields()
            
         ])
      });
   }



   initTechnologyFields() : FormGroup
   {
      return this._FB.group({
         name 		: ['', Validators.required],
         username		: ['', Validators.required],
         password 	: ['', Validators.required],
         

         
      });
   }



   addNewInputField() : void
   {
      const control = <FormArray>this.form.controls.Skills;
      control.push(this.initTechnologyFields());
   }

   removeInputField(i : number) : void
   {
      const control = <FormArray>this.form.controls.Skills;
      control.removeAt(i);
   }

   manage(val : any) : void
   {
      console.dir(val);
   }
  }

  export interface User{
    username:string;
    password:string;
    Skills:{
  name :string;

    }
  }