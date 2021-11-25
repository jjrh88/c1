import { Injectable } from '@angular/core';
import { configuration } from '../configuration/configuration';
import { Message } from '../configuration/message'
import { ValidationMessage } from '../configuration/validation'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration
  message =  Message
  validation =  ValidationMessage


  constructor() { }

  getConfig()
  {
    return this.config
  }

  getMessage()
  {
    return this.message
  }
  
  getValidation()
  {
    return this.validation
  }

}
