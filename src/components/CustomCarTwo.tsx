interface CustomCarTwoProps {
  className?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function CustomCarTwo({
  className = "",
  title = "Get Started",
  description = "This is a simple card using Tailwind. It uses a white container, rounded corners, and a blue primary button.",
  primaryLabel = "Primary Action",
  secondaryLabel = "Secondary",
  onPrimaryClick,
  onSecondaryClick,
}: CustomCarTwoProps) {
  return (
    <div className={`w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col gap-1">
        <h3 className="text-gray-900 text-2xl font-semibold leading-snug">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrimaryClick}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          onClick={onSecondaryClick}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          {secondaryLabel}
        </button>
      </div>
    </div>
  );
}
