"use client";
import ProjectCard from "./project-card";
import tictactoe from "@/public/images/TicTacToeUnlimited.png";
import Break from "./break";

export default function Projects() {
  return (
    <div className="relative flex flex-col  items-center mb-8">
      <Break section="Projects" />

      <div className="flex flex-col items-center py-8 md:py-16 xl:py-16 px-4 md:px-28 xl:px-48 2xl:px-72  text-2xl w-full gap-4 md:gap-16 xl:gap-32 ">
        {" "}
        <ProjectCard
          title="Tic Tac Toe Unlimited"
          description="This is a game where is no draws. The game is played on a 3x3 grid. You can either play vs computer or vs friend. The first player to get 3 of their marks in a row (up, down, across, or diagonally) gets the points and who reaches 3000 points first wins."
          tags={["Vue", "Tailwind"]}
          image={tictactoe.src}
          url="https://tic-tac-toe-unlimited.netlify.app/"
          srcUrl="https://github.com/yamansdev/tic-tac-toe-unlimited"
        />
      </div>
    </div>
  );
}
