export function Footer() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white border-t-2">
      <div className="max-w-8xl px-4 lg:px-12 mx-auto h-[60px] flex items-center gap-4 justify-between">
        <div className="flex space-x-4 font-medium text-sm">
          <a href="https://retroui.dev" target="_blank">
            RetroUI
          </a>
        </div>

        <p className="text-sm">
          A project by{" "}
          <a
            className="font-medium text-accent hover:underline"
            href="https://x.com/@ariflogs"
            target="_blank"
          >
            Arif Hossain
          </a>
        </p>
      </div>
    </div>
  );
}
