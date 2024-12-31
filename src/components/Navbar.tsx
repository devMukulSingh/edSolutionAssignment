import { SignedIn, SignedOut, SignInButton,  UserButton } from "@clerk/clerk-react";
import Navlinks from "./Navlinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-20 flex justify-center items-center bg-neutral-200 px-10">
      <Navlinks />
      <div className="ml-auto">
        <SignedOut>
          <SignInButton mode="modal"/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
