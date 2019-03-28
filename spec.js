describe('Hi there! It is a simple protractor app demo' ,function(){

var firstNumber = element(by.model('first'))
var secondNumber = element(by.model('second'))
var goButton = element(by.id('gobutton'))
var latestResult = element(by.binding('latest'))
var operators = element(by.model('operator'))
var options = element.all(by.tagName('option'))

beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/');

});

it('Checks Title' ,function(){

expect(browser.getTitle()).toEqual('Super Calculator');


});


it('should add 8 and 8' ,function(){
    firstNumber.sendKeys(9);
    secondNumber.sendKeys(9);
    goButton.click();
expect(latestResult.getText()).toEqual('18') 

});



it('should multiple 9 and 3' ,function(){
    firstNumber.sendKeys(9);
    operators.click();
options.get(3).click();
secondNumber.sendKeys(3);
goButton.click();
expect(latestResult.getText()).toEqual('27') 

});

it('should subtract 9 and 3' ,function(){
    firstNumber.sendKeys(9);
    operators.click();
    options.get(4).click();
    secondNumber.sendKeys(3);
    goButton.click();
    expect(latestResult.getText()).toEqual('6') 
    
    });
    
it('Should read value from an input' ,function(){
    firstNumber.sendKeys(9);
    expect(firstNumber.getAttribute('value')).toEqual('9')
    

});




});