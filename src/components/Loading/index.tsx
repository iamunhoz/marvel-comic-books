export function Loading():JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-10 w-10 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016.478 15H4.678c.232.641.558 1.244.957 1.791l1.37-1.5zm9.43-.482A7.962 7.962 0 0117.522 15h1.8a8.01 8.01 0 01-1.729 2.076l-1.37-1.5zM12 20a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    </div>
  )
}