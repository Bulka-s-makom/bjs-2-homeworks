function parseCount(number) {
    if(!parseFloat(number)) {
      throw new Error('Невалидное значение');
    } 
     return parseFloat(number);
}
   
function validateCount(numOfNumber) {
    try{
    return parseCount(numOfNumber);
    } catch (error){
    return error;
    }
}

console.log(validateCount('5.5'))

class Triangle {
    constructor(a, b , c) {
      if(a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const semiP = this.perimeter / 2;
      return +(Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c))).toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    let triangle;
    try {
      triangle = new Triangle(a, b, c);
    } catch (error) {
      triangle = {
        get area() {
          return 'Ошибка! Треугольник не существует';
        },
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
      };
    }
    return triangle;
  }