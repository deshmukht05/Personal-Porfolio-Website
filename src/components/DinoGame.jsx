import { useEffect, useRef, useState } from "react";

const GAME_WIDTH = 900;
const GAME_HEIGHT = 250;

const DINO_WIDTH = 40;
const DINO_HEIGHT = 45;

const GROUND_Y = 200;

export const DinoGame = () => {
  const canvasRef = useRef(null);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const gameState = useRef({
    dino: {
      x: 80,
      y: GROUND_Y - DINO_HEIGHT,
      width: DINO_WIDTH,
      height: DINO_HEIGHT,
      velocityY: 0,
      jumping: false,
    },

    obstacles: [],

    speed: 6,

    gravity: 0.7,

    score: 0,

    gameOver: false,

    lastObstacleTime: 0,

    animationId: null,
  });

  const resetGame = () => {
    const state = gameState.current;

    state.dino = {
      x: 80,
      y: GROUND_Y - DINO_HEIGHT,
      width: DINO_WIDTH,
      height: DINO_HEIGHT,
      velocityY: 0,
      jumping: false,
    };

    state.obstacles = [];
    state.speed = 6;
    state.score = 0;
    state.gameOver = false;
    state.lastObstacleTime = 0;

    setScore(0);
    setGameOver(false);
    setGameStarted(true);

    startGame();
  };

  const jump = () => {
    const state = gameState.current;

    if (state.gameOver) {
      resetGame();
      return;
    }

    if (!state.dino.jumping) {
      state.dino.jumping = true;
      state.dino.velocityY = -12;

      // Move immediately instead of waiting for the next frame
      state.dino.y += state.dino.velocityY;
    }
  };

  const createObstacle = () => {
    const state = gameState.current;

    const height = Math.random() > 0.5 ? 45 : 30;
    const width = Math.random() > 0.5 ? 25 : 18;

    state.obstacles.push({
      x: GAME_WIDTH + 20,
      y: GROUND_Y - height,
      width,
      height,
    });
  };

  const collision = (dino, obstacle) => {
    const padding = 6;

    return (
      dino.x + padding < obstacle.x + obstacle.width &&
      dino.x + dino.width - padding > obstacle.x &&
      dino.y + padding < obstacle.y + obstacle.height &&
      dino.y + dino.height - padding > obstacle.y
    );
  };

  const drawDino = (ctx, dino) => {
    ctx.fillStyle = "#222";

    // Body
    ctx.fillRect(dino.x, dino.y + 12, dino.width - 10, dino.height - 12);

    // Head
    ctx.fillRect(dino.x + 20, dino.y, 25, 25);

    // Snout
    ctx.fillRect(dino.x + 38, dino.y + 10, 10, 8);

    // Eye
    ctx.fillStyle = "#fff";

    ctx.fillRect(dino.x + 35, dino.y + 5, 4, 4);

    // Legs
    ctx.fillStyle = "#222";

    ctx.fillRect(dino.x + 5, dino.y + 35, 7, 12);

    ctx.fillRect(dino.x + 22, dino.y + 35, 7, 12);

    // Tail
    ctx.fillRect(dino.x - 10, dino.y + 18, 15, 7);
  };

  const drawObstacle = (ctx, obstacle) => {
    ctx.fillStyle = "#333";

    // Main cactus
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

    // Arms
    if (obstacle.height > 35) {
      ctx.fillRect(obstacle.x - 8, obstacle.y + 15, 8, 7);

      ctx.fillRect(obstacle.x + obstacle.width, obstacle.y + 25, 8, 7);
    }
  };

  const drawGround = (ctx) => {
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(0, GROUND_Y);
    ctx.lineTo(GAME_WIDTH, GROUND_Y);

    ctx.stroke();
  };

  const drawGameOver = (ctx) => {
    ctx.fillStyle = "#333";

    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";

    ctx.fillText("GAME OVER", GAME_WIDTH / 2, 90);

    ctx.font = "16px Arial";

    ctx.fillText("Press SPACE to restart", GAME_WIDTH / 2, 120);
  };

  const gameLoop = (timestamp) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const state = gameState.current;

    // Clear canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Background
    ctx.fillStyle = "#fff";

    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Ground
    drawGround(ctx);

    if (!state.gameOver) {
      // -------------------------
      // DINO PHYSICS
      // -------------------------

      state.dino.velocityY += state.gravity;

      state.dino.y += state.dino.velocityY;

      if (state.dino.y >= GROUND_Y - state.dino.height) {
        state.dino.y = GROUND_Y - state.dino.height;

        state.dino.velocityY = 0;

        state.dino.jumping = false;
      }

      // -------------------------
      // OBSTACLE CREATION
      // -------------------------

      if (timestamp - state.lastObstacleTime > 1200 + Math.random() * 1000) {
        createObstacle();

        state.lastObstacleTime = timestamp;
      }

      // -------------------------
      // MOVE OBSTACLES
      // -------------------------

      state.obstacles.forEach((obstacle) => {
        obstacle.x -= state.speed;
      });

      // Remove old obstacles
      state.obstacles = state.obstacles.filter(
        (obstacle) => obstacle.x + obstacle.width > 0,
      );

      // -------------------------
      // COLLISION
      // -------------------------

      for (const obstacle of state.obstacles) {
        if (collision(state.dino, obstacle)) {
          state.gameOver = true;

          setGameOver(true);

          break;
        }
      }

      // -------------------------
      // SCORE
      // -------------------------

      state.score += 0.1;

      setScore(Math.floor(state.score));

      // Gradually increase speed
      state.speed = 6 + state.score / 300;
    }

    // Draw Dino
    drawDino(ctx, state.dino);

    // Draw obstacles
    state.obstacles.forEach((obstacle) => {
      drawObstacle(ctx, obstacle);
    });

    // Game over
    if (state.gameOver) {
      drawGameOver(ctx);
    }

    state.animationId = requestAnimationFrame(gameLoop);
  };

  const startGame = () => {
    cancelAnimationFrame(gameState.current.animationId);

    gameState.current.animationId = requestAnimationFrame(gameLoop);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    startGame();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();

        if (!gameStarted) {
          startGame();
          setGameStarted(true);
          return;
        }

        jump();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      cancelAnimationFrame(gameState.current.animationId);
    };
  }, [gameStarted]);

  return (
    <div className="dino-game-wrapper">
      {!gameStarted ? (
        <div className="game-start-screen">
          <h2>🦖 Dino Game</h2>

          <p>Want to play while you're here?</p>

          <button className="start-game-button" onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="score">SCORE: {score}</div>

          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            onClick={jump}
            className="dino-canvas"
          />

          <div className="game-instructions">
            Press <strong>SPACE</strong> or <strong>↑</strong> to jump
          </div>

          {gameOver && (
            <button className="restart-button" onClick={resetGame}>
              Restart Game
            </button>
          )}
        </>
      )}
    </div>
  );
};
