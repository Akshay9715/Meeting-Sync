function Header({ setOnHome, setOnAbout }) {
  return (
    <nav className="bg-black flex items-center px-6">
      <div className="flex w-1/3 items-center">
        <div className="flex items-center space-x-2">
          <img src="/react.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-white font-bold text-xl">Meeting Sync</span>
        </div>
      </div>

      <div className="flex w-2/3 justify-end items-center space-x-4 ">
        <div className="flex space-x-6 text-white w-2/3">
          <a
            href=""
            onClick={() => {
              setOnHome(true);
              setOnAbout(false);
            }}
            className="hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => {
              setOnHome(false);
              setOnAbout(true);
            }}
            className="hover:underline"
          >
            About Us
          </a>
          <a
            href="#"
            onClick={() => {
              setOnHome(false);
              setOnAbout(false);
            }}
            className="hover:underline"
          >
            Dashboard
          </a>
          <a
            href="https://forms.gle/MZSYKTutXFT3jDK67"
            className="hover:underline"
          >
            Feedback
          </a>
        </div>

        <div className="flex space-x-4  w-1/3">
          <button>
            <img
              src="/58479337-832e-4854-b00b-c6ecc19413ac.png"
              alt="Sign Up"
              className="h-full"
            />
          </button>
          <button>
            <img
              src="public\5b5669f7-f4be-452d-9e32-895d23bd0856.png"
              alt="Sign IN"
              className="h-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
