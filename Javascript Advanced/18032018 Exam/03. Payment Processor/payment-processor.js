class PaymentProcessor {
    constructor(options = {}) {
      this.payments = new Map()
      this.options = options 
      this.payment = 0
    }
    
    get options() {
      return this._options;
    }
  
  set options(newValue) {
      this._options = {}
     
      if(newValue.hasOwnProperty('types')){
        this._options['types'] = newValue['types']
      } else{
        this._options['types'] =["service", "product", "other"]
      }

      if(newValue.hasOwnProperty('precision')){
        this._options['precision'] = newValue['precision']
      } else{
        this._options['precision'] =2
      }
      
    }

    registerPayment(id,name,type,value) {
        this.id = id
        if (typeof id !== 'string') {
          throw new Error('ID must be a non-empty string');
        }
        if (id.length === 0) {
          throw new Error('ID must be a non-empty string');
        }

        if (typeof name !== 'string') {
          throw new Error('Name must be a non-empty string');
        }
        if (name.length === 0) {
          throw new Error('Name must be a non-empty string');
        }

        if (typeof value !== 'number') {
          throw new Error('Value must be a number');
        }
        let obj  = {'name': name, 'type': type, 'value':value}

        if (!this.payments.has(id)){
          
          if(!this.options['types'].includes(type)){
              throw Error('Invalid type!')
          }
          this.payments.set(id,obj)
          this.payment += value
        } else{
          throw Error('This is already added')
        }
      }

    deletePayment(id){
      if (this.payments.has(id)){
        this.payment = this.payment - this.payments.get(id).value
        this.payments.delete(id)

      } else{
        throw Error('Payment not found.')
      }
    }

    get(id){
      if (this.payments.has(id)){
        
        return `Details about payment ID: ${id}\n- Name: ${this.payments.get(id).name}\n- Type: ${this.payments.get(id).type}\n- Value: ${this.payments.get(id).value.toFixed(this.options['precision'])}`
      } else{
        throw Error('Payment not found.')
      }
    }

    setOptions(options){
        this.options = options
    }

    toString() {
      let summary = 'Summary:\n'
      summary += `- Payments: ${this.payments.size}\n`

      summary += `- Balance: ${this.payment.toFixed(this.options['precision'])}`
      return summary;
    }
  }

  module.exports = PaymentProcessor;