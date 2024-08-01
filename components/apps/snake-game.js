import React, { Component } from 'react';

export class SnakeGame extends Component {
    constructor() {
        super();
        this.canvasRef = React.createRef();
        this.state = {
            score: 0,
            highScore: 0,
            gameOver: false,
            paused: false,
            gameStarted: false
        };
        
        // Game settings
        this.gridSize = 20;
        this.tileSize = 20;
        this.gameSpeed = 150;
        this.animationId = null;
        this.lastUpdateTime = 0;
        
        // Snake state
        this.snake = [{ x: 10, y: 10 }];
        this.direction = { x: 1, y: 0 };
        this.nextDirection = { x: 1, y: 0 };
        this.food = { x: 15, y: 10 };
    }

    componentDidMount() {
        const savedHighScore = localStorage.getItem('snake-high-score');
        if (savedHighScore) {
            this.setState({ highScore: parseInt(savedHighScore) });
        }
        this.setupCanvas();
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    setupCanvas = () => {
        const canvas = this.canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#0a0e14';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.drawGrid(ctx);
        }
    }

    drawGrid = (ctx) => {
        ctx.strokeStyle = '#1a1f26';
        ctx.lineWidth = 1;
        for (let i = 0; i <= this.gridSize; i++) {
            // Vertical lines
            ctx.beginPath();
            ctx.moveTo(i * this.tileSize, 0);
            ctx.lineTo(i * this.tileSize, this.gridSize * this.tileSize);
            ctx.stroke();
            // Horizontal lines
            ctx.beginPath();
            ctx.moveTo(0, i * this.tileSize);
            ctx.lineTo(this.gridSize * this.tileSize, i * this.tileSize);
            ctx.stroke();
        }
    }

    handleKeyPress = (e) => {
        if (!this.state.gameStarted) {
            if (e.key === ' ' || e.key === 'Enter') {
                this.startGame();
            }
            return;
        }

        // Check for restart key first (works even when game is over)
        if (e.key === 'r' || e.key === 'R') {
            if (this.state.gameOver) {
                e.preventDefault();
                this.resetGame();
            }
            return;
        }

        if (e.key === ' ') {
            e.preventDefault();
            this.togglePause();
            return;
        }

        if (this.state.gameOver || this.state.paused) return;

        // Prevent snake from reversing
        switch (e.key) {
            case 'ArrowUp':
                if (this.direction.y === 0) this.nextDirection = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (this.direction.y === 0) this.nextDirection = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (this.direction.x === 0) this.nextDirection = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (this.direction.x === 0) this.nextDirection = { x: 1, y: 0 };
                break;
            default:
                return;
        }
        e.preventDefault();
    }

    startGame = () => {
        this.setState({ gameStarted: true, gameOver: false, paused: false });
        this.gameLoop(performance.now());
    }

    togglePause = () => {
        if (this.state.gameOver) return;
        this.setState({ paused: !this.state.paused }, () => {
            if (!this.state.paused) {
                this.gameLoop(performance.now());
            }
        });
    }

    gameLoop = (currentTime) => {
        if (this.state.gameOver || this.state.paused) return;

        const deltaTime = currentTime - this.lastUpdateTime;
        
        if (deltaTime >= this.gameSpeed) {
            this.update();
            this.draw();
            this.lastUpdateTime = currentTime;
        }

        this.animationId = requestAnimationFrame(this.gameLoop);
    }

    update = () => {
        // Update direction
        this.direction = { ...this.nextDirection };

        // Calculate new head position
        const newHead = {
            x: this.snake[0].x + this.direction.x,
            y: this.snake[0].y + this.direction.y
        };

        // Check wall collision
        if (newHead.x < 0 || newHead.x >= this.gridSize || 
            newHead.y < 0 || newHead.y >= this.gridSize) {
            this.endGame();
            return;
        }

        // Check self collision
        if (this.snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
            this.endGame();
            return;
        }

        // Add new head
        this.snake.unshift(newHead);

        // Check food collision
        if (newHead.x === this.food.x && newHead.y === this.food.y) {
            const newScore = this.state.score + 10;
            this.setState({ score: newScore });
            this.spawnFood();
            // Increase speed slightly
            this.gameSpeed = Math.max(80, this.gameSpeed - 1);
        } else {
            // Remove tail if no food eaten
            this.snake.pop();
        }
    }

    spawnFood = () => {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * this.gridSize),
                y: Math.floor(Math.random() * this.gridSize)
            };
        } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        
        this.food = newFood;
    }

    draw = () => {
        const canvas = this.canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.fillStyle = '#0a0e14';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        this.drawGrid(ctx);
        
        // Draw snake
        this.snake.forEach((segment, index) => {
            if (index === 0) {
                // Head - solid green
                ctx.fillStyle = '#4ec9b0';
            } else {
                // Body - slightly darker green
                ctx.fillStyle = '#3b9988';
            }
            
            ctx.fillRect(
                segment.x * this.tileSize + 1,
                segment.y * this.tileSize + 1,
                this.tileSize - 2,
                this.tileSize - 2
            );
        });
        
        // Draw food - simple red square
        ctx.fillStyle = '#f14c4c';
        ctx.fillRect(
            this.food.x * this.tileSize + 1,
            this.food.y * this.tileSize + 1,
            this.tileSize - 2,
            this.tileSize - 2
        );
    }

    endGame = () => {
        this.setState({ gameOver: true });
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        // Update high score
        if (this.state.score > this.state.highScore) {
            this.setState({ highScore: this.state.score });
            localStorage.setItem('snake-high-score', this.state.score.toString());
        }
    }

    resetGame = () => {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        
        this.snake = [{ x: 10, y: 10 }];
        this.direction = { x: 1, y: 0 };
        this.nextDirection = { x: 1, y: 0 };
        this.gameSpeed = 150;
        this.food = { x: 15, y: 10 };
        this.lastUpdateTime = 0;
        
        this.setState({ 
            score: 0, 
            gameOver: false, 
            paused: false,
            gameStarted: true 
        }, () => {
            this.setupCanvas();
            this.gameLoop(performance.now());
        });
    }

    render() {
        const { score, highScore, gameOver, paused, gameStarted } = this.state;

        return (
            <div className="w-full h-full flex flex-col" style={{
                backgroundColor: '#0a0e14',
                fontFamily: '"Ubuntu Mono", "Courier New", monospace',
                color: '#00ffaa'
            }}>
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3" style={{
                    backgroundColor: '#1e1e1e',
                    borderBottom: '1px solid #3b3b3b'
                }}>
                    <div className="flex items-center space-x-4">
                        <div style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#cccccc'
                        }}>
                            🐍 Terminal Snake
                        </div>
                        <div style={{
                            fontSize: '13px',
                            color: '#6a9955',
                            fontStyle: 'italic'
                        }}>
                            root@kali
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div style={{ fontSize: '14px', color: '#cccccc' }}>
                            Score: <span style={{ color: '#4ec9b0', fontWeight: '600' }}>{score}</span>
                        </div>
                        <div style={{ fontSize: '14px', color: '#cccccc' }}>
                            High: <span style={{ color: '#dcdcaa', fontWeight: '600' }}>{highScore}</span>
                        </div>
                    </div>
                </div>

                {/* Game Area */}
                <div className="flex-1 flex items-center justify-center relative" style={{
                    backgroundColor: '#0a0e14'
                }}>
                    <canvas
                        ref={this.canvasRef}
                        width={this.gridSize * this.tileSize}
                        height={this.gridSize * this.tileSize}
                        style={{
                            border: '2px solid #3b3b3b',
                            borderRadius: '2px'
                        }}
                    />

                    {/* Overlays */}
                    {!gameStarted && (
                        <div className="absolute inset-0 flex items-center justify-center" style={{
                            backgroundColor: 'rgba(10, 14, 20, 0.95)'
                        }}>
                            <div className="text-center">
                                <div style={{
                                    fontSize: '42px',
                                    color: '#cccccc',
                                    marginBottom: '30px',
                                    fontWeight: '600'
                                }}>
                                    🐍 Terminal Snake
                                </div>
                                <div style={{
                                    fontSize: '16px',
                                    color: '#9e9e9e',
                                    marginBottom: '30px',
                                    lineHeight: '1.8'
                                }}>
                                    <div>↑ ↓ ← → Arrow Keys to Move</div>
                                    <div>SPACE to Pause</div>
                                    <div>R to Restart</div>
                                </div>
                                <div style={{
                                    fontSize: '18px',
                                    color: '#4ec9b0',
                                    fontWeight: '500',
                                    animation: 'blink 1.5s infinite'
                                }}>
                                    Press SPACE or ENTER to Start
                                </div>
                            </div>
                        </div>
                    )}

                    {paused && !gameOver && (
                        <div className="absolute inset-0 flex items-center justify-center" style={{
                            backgroundColor: 'rgba(10, 14, 20, 0.9)'
                        }}>
                            <div style={{
                                fontSize: '42px',
                                color: '#dcdcaa',
                                fontWeight: '600'
                            }}>
                                ⏸ PAUSED
                            </div>
                        </div>
                    )}

                    {gameOver && (
                        <div className="absolute inset-0 flex items-center justify-center" style={{
                            backgroundColor: 'rgba(10, 14, 20, 0.95)'
                        }}>
                            <div className="text-center">
                                <div style={{
                                    fontSize: '48px',
                                    color: '#f14c4c',
                                    marginBottom: '20px',
                                    fontWeight: '600'
                                }}>
                                    GAME OVER
                                </div>
                                <div style={{
                                    fontSize: '28px',
                                    color: '#cccccc',
                                    marginBottom: '30px'
                                }}>
                                    Final Score: {score}
                                </div>
                                {score === highScore && score > 0 && (
                                    <div style={{
                                        fontSize: '22px',
                                        color: '#dcdcaa',
                                        marginBottom: '20px'
                                    }}>
                                        🏆 New High Score!
                                    </div>
                                )}
                                <div style={{
                                    fontSize: '18px',
                                    color: '#4ec9b0',
                                    animation: 'blink 1.5s infinite'
                                }}>
                                    Press R to Restart
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 text-center" style={{
                    backgroundColor: '#1e1e1e',
                    borderTop: '1px solid #3b3b3b',
                    fontSize: '12px',
                    color: '#808080'
                }}>
                    <div>
                        <span style={{ color: '#9e9e9e' }}>←→↑↓</span> Move | 
                        <span style={{ color: '#9e9e9e' }}> SPACE</span> Pause | 
                        <span style={{ color: '#9e9e9e' }}> R</span> Restart
                    </div>
                </div>

                <style jsx>{`
                    @keyframes pulse {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.7; transform: scale(1.05); }
                    }
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0.3; }
                    }
                `}</style>
            </div>
        );
    }
}

export default SnakeGame;

export const displaySnakeGame = (id, minimizeApp, maximizeApp, closeApp, openApp) => {
    return <SnakeGame 
        id={id} 
        minimizeApp={minimizeApp} 
        maximizeApp={maximizeApp} 
        closeApp={closeApp} 
        openApp={openApp}
    />;
}
