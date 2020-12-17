
class Animal {
    constructor(name) {
        this.name = name;
    }

    action(e) {
        document.getElementById("animalImage").style.display="block";
        document.getElementById(this.actionSoundName).play();

    }

    showImage() {
        document.getElementById("animalImage").src = this.image;

    }

    putInTheDocument() {
        
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");

        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);

        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);

        petTR.onclick = this.showImage.bind(this);
        petActionTDButton.onclick = this.action.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
        this.actionText = "Meoow"
        this.actionSoundName = "meow"
        this.image = "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
    }
}

class Monkey extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
        this.actionText = "Scream"
        this.actionSoundName = "scream"
        this.image = "https://www.bostonherald.com/wp-content/uploads/2020/05/GettyImages-824860820.jpg"
    }
}

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
  
  