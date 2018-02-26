import { Injectable } from '@angular/core';

import { Engine } from 'json-rules-engine';

@Injectable()
export class JsonRulerService {

    constructor() {
   }

  public engine= new Engine();

  public evaluationRule = {
    conditions: {
      all: [{
        fact: 'task-information',
        operator: 'equal',
        value: 1,
        path: '.userId' // access the 'company' property of "account-information"
      }, {
        fact: 'task-information',
        operator: 'equal',
        value: true, // 'status' can be active or paid-leave
        path: '.completed' // access the 'status' property of "account-information"
      }]
    },
    event: {
      type: 'evaluation-criteria',
      params: {
        message: 'current Task is evaluated by User with ID 1 and evaluation is completed'
      }
    }
  }

  // this.engine.addRule(this.evaluationRule);

 public applyRulesOfJSON(obj):any{
     let facts = { 'task-information' : obj };
     console.log("apply",facts);
     this.engine
     .run(facts)
     .then(function (events) {
       return events.map(event => event.params.message)
     })
     .catch(err => console.log(err.stack))
 }

}