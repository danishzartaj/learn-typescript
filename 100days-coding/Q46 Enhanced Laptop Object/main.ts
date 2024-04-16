// Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let obje_ct={
    model:"XPS 16",
    year:2021,
    make:"Dell",
    describe:function(){
                    console.log(`This is a ${this.make} ${this.model} from ${this.year}`)
        }
    }   
obje_ct.describe()