 const {Circle, Triangle, Square}= require('./shapes');
 describe('Circle',()=>{
    test ('renders circle', ()=>{
        const polygon = new Circle();
        let color = ('green')
        polygon.setColor(color);
        expect(polygon.render()).toEqual(`<circle cx="150" cy="100" r="80" fill='${this.color}'/>`)

    });
 });

 describe('Square',()=>{
    test ('renders square', ()=>{
        const polygon = new Circle();
        let color = ('orange')
        polygon.setColor(color);
        expect(polygon.render()).toEqual(`<rectangle x ='50' height ='200' width ='200' fill ='${this.color}'/> `)

    });
 });

 describe('Triangle',()=>{
    test ('renders triangle', ()=>{
        const polygon = new Circle();
        let color = ('white')
        polygon.setColor(color);
        expect(polygon.render()).toEqual( `<triangle height ='100%' width='100%' points = '0, 200, 300, 150.0' fill = 'ORANGE'/>`)

    });
 });