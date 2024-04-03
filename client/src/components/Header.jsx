import { Button, Navbar, NavbarLink, TextInput } from "flowbite-react";
import Logo from "../images/logo-fin3.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Navbar>
      <Link to="/" className="self-center whitespace-nowrap">
        <img src={Logo} className="w-44" alt="AE Blogsite" />
      </Link>
      {/* <form>
        <TextInput
          type="text"
          placeholder="search"
          rightIcon={AiOutlineSearch}
          className="hidden sm:inline"
        />
      </form> */}
      {/* <Button size="lg" color="failure" pill className="sm:hidden w-12 h-12 ">
        <AiOutlineSearch />
      </Button> */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 md:order-2">
          <Link to="/sign-in" className="">
            <Button size="lg" color="failure" pill className="">
              Sign In
            </Button>
          </Link>
        </div>
        <div className="gap-4 text-md  hidden sm:flex">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/projects" className="text-white">
            Projects
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
