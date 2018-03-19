let expect = require("chai").expect;
let PaymentPackage = require('../02. Payment Package/payment-package')

describe("PaymentPackage class", function() {
    let pp

    it("should not throw when initialized with two parameters", function() {
        let initStr = () => pp = new PaymentPackage('Test',10)
      expect(initStr).to.not.throw();
    });

    it("should throw when initialized with no parameters", function() {
        let initStr = () => pp = new PaymentPackage()
      expect(initStr).to.throw();
    });
    
    describe('check accessors', function () {
        beforeEach(function () {
            pp = new PaymentPackage('Test', 10);
        });

        it('has functions attached to prototype', function () {
            expect(Object.getPrototypeOf(pp).hasOwnProperty('name')).to.equal(true);
            expect(Object.getPrototypeOf(pp).hasOwnProperty('value')).to.equal(true);
            expect(Object.getPrototypeOf(pp).hasOwnProperty('VAT')).to.equal(true);
            expect(Object.getPrototypeOf(pp).hasOwnProperty('active')).to.equal(true);
            expect(Object.getPrototypeOf(pp).hasOwnProperty('toString')).to.equal(true);
        });

        it("check name accessor if it's string", function() {
          expect(pp.name).to.be.a('string')
        });

        it("check name to be equal with the given value", function() {
            expect(pp.name).to.equal('Test')
          });
        
          it("check name get to be equal with the given value", function() {
            expect(pp.name).to.equal('Test')
          });
        
        it("check value accessor if it is a  number", function() {
          expect(pp.value).to.be.a('number')
        });
  
        it("check value to be equal with the given value", function() {
          expect(pp.value).to.equal(10)
        });
        
        it("check VAT accessor if it is a number", function() {
            expect(pp.VAT).to.be.a('number')
          });
    
        it("check VAT to be equal with the given value", function() {
            expect(pp.VAT).to.equal(20)
          });
        
          it("check active accessor if it is a boolean", function() {
            expect(pp.active).to.be.a('boolean')
          });
    
        it("check active to be equal with the given value", function() {
            expect(pp.active).to.equal(true)
          });
              
        
    });

    describe('check accessors', function () {
        beforeEach(function () {
            pp = new PaymentPackage('Test', 10);
            pp.active = false
        });

        it("check active to be inactive", function() {
            expect(pp.active).to.equal(false)
          });
    });

  });