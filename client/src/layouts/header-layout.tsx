import { Link, Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <>
      <header className="w-full px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link
            className="font-black tracking-tighter uppercase text-2xl"
            to={"/"}
          >
            kicks
          </Link>
        </nav>
      </header>
      <div className="px-4">
        <Outlet />
      </div>
    </>
  );
}

export default HeaderLayout;
