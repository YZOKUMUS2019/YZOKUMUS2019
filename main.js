// main.js - Modular Game Logic

class Game {
    constructor() {
        this.players = [];
        this.score = 0;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    calculateScore() {
        this.score = this.players.reduce((acc, player) => acc + player.getScore(), 0);
        this.displayScore();
    }

    displayScore() {
        console.log(`Total Score: ${this.score}`);
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    updateScore(points) {
        this.score += points;
    }

    getScore() {
        return this.score;
    }
}

// Example of usage
const game = new Game();
const player1 = new Player('Alice');
player1.updateScore(10);
const player2 = new Player('Bob');
player2.updateScore(20);

game.addPlayer(player1);
game.addPlayer(player2);
game.calculateScore();
