class Polygon {
    constructor (){
        this.color = " ";
    }
    setColor(color){
        this.color = (color);
    }
}
  class Triangle extends Polygon {
    render (){ return 
      `<triangle height ='100%' width='100%' points = '0, 200, 300, 150.0' fill = '${this.color}'/>`

    }
  }
  class Circle extends Polygon {
    render (){ return 
      `<circle cx="150" cy="100" r="80" fill='${this.color}'/> `
        
    }
  }
  
  class Square extends Polygon {
    render (){ return 
      `<rectangle x ='50' height ='200' width ='200' fill ='${this.color}'/> `  
    }
  }
      module.exports = {Circle, Square, Triangle};