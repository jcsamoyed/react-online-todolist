import { Outlet } from "react-router-dom";

function IndexLayout() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yello">
      <div className="flex flex-col md:flex-row items-center md:gap-12 lg:gap-[106px] md:w-9/12 md:max-w-[796px]">
        <div className="flex md:flex-col items-center md:w-6/12">
          <img src={require('@/assets/images/logo.png')} className="mb-4 lg:w-fit" alt="logo" />
          <img src={require('@/assets/images/hero.png')} className="hidden md:block" alt="ONLINE TODO LIST" />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default IndexLayout;