import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";

export function Grid() {
  const { grid } = usePathfinding();

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center border-sky-500",

        // Control Grid Height
        `lg:min-h-[${MAX_ROWS * 17}px]
         md:min-h-[${MAX_ROWS * 15}px]
         xs:min-h-[${MAX_ROWS * 8}px]
         min-h-[${MAX_ROWS * 7}px]`,

        // Control Grid Width
        `lg:w-[${MAX_COLS * 17}px]
         md:w-[${MAX_COLS * 15}px]
         xs:w-[${MAX_COLS * 8}px]
         w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} className="flex">
          {row.map((tile, tileIdx) => {
            const { isEnd, isStart, isPath, isTraversed, isWall } = tile;
            return (
              <Tile
                key={tileIdx}
                row={tile.row}
                col={tile.col}
                isEnd={isEnd}
                isPath={isPath}
                isStart={isStart}
                isTraversed={isTraversed}
                isWall={isWall}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
