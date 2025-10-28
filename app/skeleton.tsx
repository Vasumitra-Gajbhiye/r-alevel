export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-shimmer bg-gray-200  ${className}`}></div>
  );
}