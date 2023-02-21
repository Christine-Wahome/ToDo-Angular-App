import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit{
  registerForm!:FormGroup
  title = 'angularvalidate';
  submitted=false;
  passwordUnmatch = false;
  
  
  
  
  constructor(private formBuilder:FormBuilder){
    
  }

  ngOnInit(){
    
    this.registerForm = this.formBuilder.group({
      
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ]],
      conPassword:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ], [this.confirmPass.bind(this)]],
      
      
      
    })


  }
 

  onSubmit(){
     this.submitted = true
     let password =this.registerForm.controls['password'].value;
    //  alert('Registered Sucessfully')
    console.log(this.registerForm);
    
  }


  confirmPass(control:AbstractControl):Promise<{[s:string]:boolean} |null>{
  
   const prom = new Promise<{[s:string]:boolean} |null>((resolve,reject)=>{
    if(control.value !==this.registerForm.value.password){
      resolve( {passwordUnmatch:true})
  }else{
    resolve (null)
  }
      
   })

   return prom;
  }

}

//  createCompareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
//   return () => {
//   if (control.value !== controlTwo.value)
//     return { match_error: 'Value does not match' };
//   return null;
// };

// }



