export default function Video({ src }: { src: string }) {
  return (
    <div className="my-8 aspect-video overflow-hidden rounded-xl shadow-sm">
      <iframe
        src={src}
        className="w-full h-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}