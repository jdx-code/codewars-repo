// Kata # 28 of 8kyu
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumenOfCuboid(length, width, height) {
        return length * width * height;
    }
}

const kataObj = new Kata();
kataObj.getVolumenOfCuboid(5, 2, 3);