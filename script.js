class Question {

    constructor(enonce, reponses, reponseCorrecte) {
        this.enonce = enonce;
        this.reponses = reponses;
        this.reponseCorrecte = reponseCorrecte;
    }

    afficher() {

        let containerDiv = document.createElement("div");

        let label = document.createElement("label");
        label.textContent = this.enonce;
        containerDiv.appendChild(label);

        containerDiv.classList.add("radio-container");
        this.reponses.forEach((reponse, index) => {
            // Créer un conteneur pour chaque bouton radio et son label
            let radioContainer = document.createElement("div");
            radioContainer.classList.add("radio-option");

            // Créer le bouton radio
            let radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = `radio${index}`;
            radioInput.name = "options";
            radioInput.value = reponse;

            // Créer le label pour le bouton radio
            let radioLabel = document.createElement("label");
            radioLabel.htmlFor = `radio${index}`;
            radioLabel.textContent = reponse;

            // Ajouter le bouton radio et son label au conteneur du bouton radio
            radioContainer.appendChild(radioInput);
            radioContainer.appendChild(radioLabel);

            // Ajouter le conteneur du bouton radio au conteneur principal
            containerDiv.appendChild(radioContainer);
        });

        // 4. Ajouter le conteneur principal au corps du document
        // document.body.appendChild(containerDiv);
        const containerQuiz = document.getElementById('quiz');
        containerQuiz.appendChild(containerDiv);
        //return this.reponses;
    }
}

class Quizz {
    constructor(questions, score) {
        this.questions = questions;
        this.score = score;
    }

    afficherQuestion(question) {
        questions.afficher();
    }

    collecterReponse() {

    }

    afficherResultat() {

    }
}

const quest1 = new Question("Quel est la couleur du ciel ?", ["Bleu", "Jaune", "Rouge"], 0)

const container = document.getElementById('quiz');

// container = quest1.afficher();
container.textContent = quest1.afficher();


const quest2 = new Question("Quel est la couleur du ciel ?", ["Bleu", "Jaune", "Rouge"], 0)