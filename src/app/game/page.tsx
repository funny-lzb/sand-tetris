"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function SandTetrisGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine>();
  const currentPieceRef = useRef<Matter.Body[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 初始化物理引擎，增加重力
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0.2 }, // 调整重力
    });
    engineRef.current = engine;

    // 创建渲染器
    const render = Matter.Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 300,
        height: 600,
        background: "#f3f4f6",
        wireframes: false,
      },
    });

    // 创建墙壁
    const walls = [
      Matter.Bodies.rectangle(150, 610, 300, 20, {
        isStatic: true,
        render: { fillStyle: "#94a3b8" },
      }), // 底部
      Matter.Bodies.rectangle(-10, 300, 20, 600, {
        isStatic: true,
        render: { fillStyle: "#94a3b8" },
      }), // 左边
      Matter.Bodies.rectangle(310, 300, 20, 600, {
        isStatic: true,
        render: { fillStyle: "#94a3b8" },
      }), // 右边
    ];

    Matter.World.add(engine.world, walls);

    // 定义颜色数组
    const colors = [
      "#f59e0b", // amber
      "#ef4444", // red
      "#3b82f6", // blue
      "#10b981", // green
      "#8b5cf6", // purple
    ];

    // 创建新方块
    const createTetrisPiece = () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const piece = Matter.Bodies.rectangle(150, 50, 40, 40, {
        render: { fillStyle: color },
        frictionAir: 0.05,
        friction: 0.1,
        restitution: 0.2,
        density: 0.001,
        label: "activePiece",
      });

      currentPieceRef.current = piece;
      Matter.World.add(engine.world, piece);
    };

    // 创建沙粒函数
    const createSandParticles = (x: number, y: number, color: string) => {
      const particles = [];
      const rows = 4;
      const cols = 4;
      const size = 6; // 沙粒大小
      const spacing = 8; // 沙粒间距

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const particle = Matter.Bodies.circle(
            x + j * spacing - (cols * spacing) / 2,
            y + i * spacing - (rows * spacing) / 2,
            size / 2,
            {
              render: { fillStyle: color },
              friction: 0.5,
              restitution: 0.2,
              density: 0.001,
              label: "sand",
            },
          );
          particles.push(particle);
        }
      }
      Matter.World.add(engine.world, particles);
    };

    // 键盘控制，使用直接的速度控制
    const handleKeyPress = (event: KeyboardEvent) => {
      const currentPiece = currentPieceRef.current;
      if (!currentPiece) return;

      switch (event.key) {
        case "ArrowLeft":
          Matter.Body.setVelocity(currentPiece, {
            x: -2,
            y: currentPiece.velocity.y,
          });
          break;
        case "ArrowRight":
          Matter.Body.setVelocity(currentPiece, {
            x: 2,
            y: currentPiece.velocity.y,
          });
          break;
        case "ArrowDown":
          Matter.Body.setVelocity(currentPiece, {
            x: currentPiece.velocity.x,
            y: 5,
          });
          break;
        case "ArrowUp":
          Matter.Body.setAngularVelocity(currentPiece, 0.1);
          break;
      }
    };

    // 添加碰撞检测，只在碰到底部时转换为沙子，然后延迟生成新方块
    Matter.Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;
        const currentPiece = currentPieceRef.current;

        if (
          currentPiece &&
          (bodyA === currentPiece || bodyB === currentPiece)
        ) {
          const otherBody = bodyA === currentPiece ? bodyB : bodyA;

          // 检查是否是底部墙壁
          if (otherBody.isStatic && otherBody.position.y > 500) {
            const { x, y } = currentPiece.position;
            const color = currentPiece.render.fillStyle;

            // 移除当前方块
            Matter.World.remove(engine.world, currentPiece);
            currentPieceRef.current = null;

            // 创建沙粒
            createSandParticles(x, y, color);

            // 2秒后生成新方块
            setTimeout(() => {
              if (isPlaying) {
                // 确保游戏还在进行
                createTetrisPiece();
              }
            }, 2000);
          }
        }
      });
    });

    // 先创建 runner
    const runner = Matter.Runner.create();

    // 然后添加事件监听
    Matter.Events.on(runner, "afterUpdate", () => {
      if (currentPieceRef.current) {
        const currentPiece = currentPieceRef.current;

        // 确保最小下落速度
        if (currentPiece.velocity.y < 0.5) {
          Matter.Body.setVelocity(currentPiece, {
            x: currentPiece.velocity.x,
            y: 0.5,
          });
        }

        // 限制水平速度
        if (Math.abs(currentPiece.velocity.x) > 3) {
          Matter.Body.setVelocity(currentPiece, {
            x: Math.sign(currentPiece.velocity.x) * 3,
            y: currentPiece.velocity.y,
          });
        }

        // 限制旋转角度
        const angle = currentPiece.angle;
        if (Math.abs(angle) > Math.PI / 4) {
          Matter.Body.setAngle(currentPiece, (Math.sign(angle) * Math.PI) / 4);
        }
      }
    });

    // 最后运行物理引擎和渲染器
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // 开始游戏
    const startGame = () => {
      setIsPlaying(true);
      createTetrisPiece();
    };

    // 添加键盘事件监听
    window.addEventListener("keydown", handleKeyPress);

    // 自动开始游戏
    startGame();

    // 清理函数
    return () => {
      setIsPlaying(false); // 确保游戏停止
      window.removeEventListener("keydown", handleKeyPress);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Sand Tetris Demo</h1>
        <p className="text-gray-600">
          Use arrow keys to control the block:
          <br />← → to move, ↓ to fall faster, ↑ to rotate
        </p>
      </div>
      <div className="rounded-lg border-4 border-gray-300 bg-white shadow-lg">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
