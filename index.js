class Polygon {
    constructor(arraySides) {
        this.arraySides = arraySides
        this.count = this.arraySides.length
    }

    
    get countSides() {
        return this.arraySides.length
    }

    get perimeter() {
        if (!Array.isArray(this.arraySides)) return;
        let sum = 0;
        for (var int of this.arraySides) {
        sum += int
        }
        return sum
        }
    }

    class Triangle extends Polygon {
        get isValid() {
            if (!Array.isArray(this.arraySides)) return;
            if (this.count !== 3) return;
                let side1 = this.arraySides[0]
                let side2 = this.arraySides[1]
                let side3 = this.arraySides[2]
                return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
          }
    }

    class Square extends Polygon {

        get isValid() {
          if (!Array.isArray(this.arraySides)) return;
          if (this.count !== 4) return;
          let side1 = this.arraySides[0]
          let side2 = this.arraySides[1]
          let side3 = this.arraySides[2]
          let side4 = this.arraySides[3]
          return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }
      
        get area() {
          if (!Array.isArray(this.arraySides)) return;
          if (this.count !== 4) return;
          return this.arraySides[0] * this.arraySides[0]
        }
      }