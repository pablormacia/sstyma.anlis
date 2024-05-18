import Link from "next/link";
import { BuildingOfficeIcon, UsersIcon, ArrowLeftEndOnRectangleIcon, UserIcon } from "@heroicons/react/24/solid"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getEstablecimientosByIds } from "@/app/dashboard/establecimientos/data";
import { Dropdown, DropdownItem } from "flowbite-react";
import DataPicker from "../DataPicker";
import { getYears } from "@/app/dashboard/data";


async function Navbar() {
  const session = await getServerSession(authOptions)
  //console.log(session)
  const establecimientos = await getEstablecimientosByIds(session.user.establecimientos)
  const years = await getYears()
  //console.log(establecimientos)
  return (
    <nav className="flex justify-between items-center bg-slate-700 text-white px-8 py-3">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold mr-8"><Link href="/dashboard">SSTyMA</Link></h1>
        <DataPicker establecimientos={establecimientos} years={years} user={session.user} />
      </div>
      <div>

        {!session?.user ? (
          <ul className="flex gap-x-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </ul>
        ) : (
          < Dropdown label={<UserIcon className="size-8" />} dismissOnClick={true} inline>
            <DropdownItem><Link href="/dashboard/establecimientos"><span className="flex items-center gap-2 p-2"><BuildingOfficeIcon className="size-4" />Establecimientos</span></Link></DropdownItem>
            <DropdownItem><Link href="/dashboard/usuarios"><span className="flex items-center gap-2 p-2"><UsersIcon className="size-4" />Usuarios</span></Link></DropdownItem>
            <DropdownItem><Link href="/api/auth/signout"><span className="flex items-center gap-2 p-2"><ArrowLeftEndOnRectangleIcon className="size-4" />Salir</span></Link></DropdownItem>
          </Dropdown>



        )}

      </div>
    </nav >
  );
}

export default Navbar;