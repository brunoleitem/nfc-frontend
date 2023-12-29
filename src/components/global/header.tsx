import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <div className="w-full py-2 px-6 border-b border-border/40 sticky flex flex-row items-center justify-between">
      <h1>Check.me</h1>
      <ModeToggle />
    </div>
  );
}
