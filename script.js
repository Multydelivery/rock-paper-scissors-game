class RockPaperScissors {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.choices = {
            rock: { emoji: '🪨', label: 'Rock' },
            paper: { emoji: '📄', label: 'Paper' },
            scissors: { emoji: '✂️', label: 'Scissors' }
        };
        
        this.initializeElements();
        this.attachEventListeners();
    }
    
    initializeElements() {
        this.playerScoreEl = document.getElementById('player-score');
        this.computerScoreEl = document.getElementById('computer-score');
        this.battleArea = document.getElementById('battle-area');
        this.resultArea = document.getElementById('result-area');
        this.playerDisplay = document.getElementById('player-display');
        this.computerDisplay = document.getElementById('computer-display');
        this.playerEmoji = document.getElementById('player-emoji');
        this.playerLabel = document.getElementById('player-label');
        this.computerEmoji = document.getElementById('computer-emoji');
        this.computerLabel = document.getElementById('computer-label');
        this.resultMessage = document.getElementById('result-message');
        this.playAgainBtn = document.getElementById('play-again');
        this.resetBtn = document.getElementById('reset-game');
        this.choiceButtons = document.querySelectorAll('.choice-btn');
    }
    
    attachEventListeners() {
        this.choiceButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const choice = e.currentTarget.dataset.choice;
                this.playRound(choice);
            });
        });
        
        this.playAgainBtn.addEventListener('click', () => {
            this.resetRound();
        });
        
        this.resetBtn.addEventListener('click', () => {
            this.resetGame();
        });
    }
    
    getRandomChoice() {
        const choices = Object.keys(this.choices);
        return choices[Math.floor(Math.random() * choices.length)];
    }
    
    determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }
        
        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };
        
        return winConditions[playerChoice] === computerChoice ? 'win' : 'lose';
    }
    
    async playRound(playerChoice) {
        // Disable choice buttons during round
        this.choiceButtons.forEach(btn => btn.disabled = true);
        
        // Show battle area
        this.battleArea.style.display = 'flex';
        this.resultArea.style.display = 'none';
        
        // Show player choice immediately
        this.displayChoice('player', playerChoice);
        
        // Add suspense with computer choice animation
        this.showComputerThinking();
        
        // Wait for dramatic effect
        await this.delay(1500);
        
        // Get computer choice and display it
        const computerChoice = this.getRandomChoice();
        this.displayChoice('computer', computerChoice);
        
        // Wait a bit more for effect
        await this.delay(500);
        
        // Determine and show result
        const result = this.determineWinner(playerChoice, computerChoice);
        this.showResult(result);
        
        // Update scores
        this.updateScore(result);
        
        // Re-enable buttons
        this.choiceButtons.forEach(btn => btn.disabled = false);
    }
    
    displayChoice(player, choice) {
        const choiceData = this.choices[choice];
        const emojiEl = player === 'player' ? this.playerEmoji : this.computerEmoji;
        const labelEl = player === 'player' ? this.playerLabel : this.computerLabel;
        
        emojiEl.textContent = choiceData.emoji;
        labelEl.textContent = choiceData.label;
        
        // Remove loading animation if it was on computer
        if (player === 'computer') {
            emojiEl.classList.remove('loading');
        }
    }
    
    showComputerThinking() {
        this.computerEmoji.textContent = '🤔';
        this.computerLabel.textContent = 'Thinking...';
        this.computerEmoji.classList.add('loading');
    }
    
    showResult(result) {
        this.resultArea.style.display = 'block';
        
        let message = '';
        let className = '';
        
        switch (result) {
            case 'win':
                message = '🎉 You Win! 🎉';
                className = 'win';
                break;
            case 'lose':
                message = '💻 Computer Wins! 💻';
                className = 'lose';
                break;
            case 'draw':
                message = '🤝 It\'s a Draw! 🤝';
                className = 'draw';
                break;
        }
        
        this.resultMessage.textContent = message;
        this.resultMessage.className = `result-message ${className}`;
    }
    
    updateScore(result) {
        if (result === 'win') {
            this.playerScore++;
            this.animateScore(this.playerScoreEl);
        } else if (result === 'lose') {
            this.computerScore++;
            this.animateScore(this.computerScoreEl);
        }
        
        this.playerScoreEl.textContent = this.playerScore;
        this.computerScoreEl.textContent = this.computerScore;
    }
    
    animateScore(element) {
        element.style.transform = 'scale(1.3)';
        element.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 300);
    }
    
    resetRound() {
        this.battleArea.style.display = 'none';
        this.resultArea.style.display = 'none';
        
        // Clear previous choices
        this.playerEmoji.textContent = '';
        this.playerLabel.textContent = '';
        this.computerEmoji.textContent = '';
        this.computerLabel.textContent = '';
        this.computerEmoji.classList.remove('loading');
    }
    
    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.playerScoreEl.textContent = '0';
        this.computerScoreEl.textContent = '0';
        this.resetRound();
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RockPaperScissors();
});

// Add some keyboard shortcuts for fun
document.addEventListener('keydown', (e) => {
    const keyMap = {
        'r': 'rock',
        'p': 'paper',
        's': 'scissors'
    };
    
    const choice = keyMap[e.key.toLowerCase()];
    if (choice) {
        const btn = document.querySelector(`[data-choice="${choice}"]`);
        if (btn && !btn.disabled) {
            btn.click();
        }
    }
    
    // Reset game with 'Escape' key
    if (e.key === 'Escape') {
        document.getElementById('reset-game').click();
    }
});

// Add a fun easter egg - Konami code for auto-win mode
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
            alert('🎮 Konami Code activated! You found the easter egg! 🎮');
        }, 1000);
        konamiCode = [];
    }
});