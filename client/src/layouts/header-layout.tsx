import { Link, Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <>
      <header className="w-full px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link className="font-black tracking-tighter uppercase text-2xl" to={"/"}>kick</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default HeaderLayout;
