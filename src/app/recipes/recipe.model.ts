export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    // The constructor is a function of every class,
    // that will be executed once you create a new instance of that class (= when you
    // create something with this class)
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}