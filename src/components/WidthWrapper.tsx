export default function WidthWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-svw px-5 pt-16 flex flex-col items-center">
      {children}
    </div>
  );
}
