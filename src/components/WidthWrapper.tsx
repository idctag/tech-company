export default function WidthWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-svw flex flex-col items-center">{children}</div>;
}
