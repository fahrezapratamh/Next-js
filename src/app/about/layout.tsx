export default function LayoutAbout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 w-60 z-10 min-h-screen bg-slate-700">
        <div className="text-white">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
}
