

// Animal 과 Dog 클래스 구현

// Animal 은 name 과 speak 메소드를 가짐
// speak는 나는 [name] 출력

//Dog 는 Animal 을 상속받고
//breed 속성을 가짐 . 개의 품종
//bark 메소드를 가지고 메소드는 "나는 [breed]"를 출력


class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
    
        console.log(`나는 ${this.name}`);
    
    }
    
    

}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;

    }
    bark(){
        console.log(`나는 ${this.breed} 이름은 ${this.name}`);
    }

}

const Animal1 = new Dog("해피","말티즈");
Animal1.bark();
Animal1.speak();