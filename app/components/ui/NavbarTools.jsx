'use client'
import { Cog6ToothIcon, DocumentTextIcon } from "@heroicons/react/24/solid"
import Link from "next/link";
import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { Dropdown, DropdownItem } from "flowbite-react";

const NavbarTools = () => {
    return (
        <Navbar fluid rounded >
            <NavbarToggle />
            <NavbarCollapse className="p-2">
                {/* <NavbarLink as={Link} href="/dashboard" active>
                    Dashboard
                </NavbarLink> */}
                < Dropdown label="Plan anual" dismissOnClick={true} inline>
                    <DropdownItem><Link href='/dashboard/planes/anual/pagp'>PAGP</Link></DropdownItem>
                    <DropdownItem>Medio ambiente</DropdownItem>
                    <DropdownItem>Administrar<Cog6ToothIcon className="size-4 ml-1" /></DropdownItem> 
                </Dropdown>
                < Dropdown label="Planes de mejora" dismissOnClick={true} inline>
                    <DropdownItem>Gestión de residuos peligrosos</DropdownItem>
                    <DropdownItem>Protección de incendios</DropdownItem>
                    <DropdownItem>Programa de ergonomía integrada</DropdownItem>
                    <DropdownItem>Gestión preventiva</DropdownItem>
                    <DropdownItem>Medio ambiente</DropdownItem>
                    <DropdownItem>Salud y seguridad en el trabajo</DropdownItem>
                    <DropdownItem>Administrar<Cog6ToothIcon className="size-4 ml-1" /></DropdownItem> 
                </Dropdown>
                < Dropdown label="Plan de capacitación" dismissOnClick={true} inline>
                    <DropdownItem>Plan anual de capacitación</DropdownItem>
                </Dropdown>
                < Dropdown label="Vencimientos" dismissOnClick={true} inline>
                    <DropdownItem>Medio ambiente</DropdownItem>
                    <DropdownItem>Salud y seguridad en el trabajo</DropdownItem>
                </Dropdown>
                < Dropdown label="Matriz legal" dismissOnClick={true} inline>
                    <DropdownItem>RES SRT 905/15</DropdownItem>
                    <DropdownItem>Medio ambiente</DropdownItem>
                    <DropdownItem>Salud y seguridad en el trabajo</DropdownItem>
                </Dropdown>
                < Dropdown label="Eventos no deseados" dismissOnClick={true} inline>
                    <DropdownItem>Sinestrialidad</DropdownItem>
                    <DropdownItem>Indices de sinestrialidad</DropdownItem>
                    <DropdownItem>Incidentes</DropdownItem>
                    <DropdownItem>Comunicación de riesgos</DropdownItem>
                </Dropdown>
                < Dropdown label="Residuos" dismissOnClick={true} inline>
                    <DropdownItem>Residuos químicos</DropdownItem>
                    <DropdownItem>Residuos biopatogénicos</DropdownItem>
                    <DropdownItem>Residuos comunes</DropdownItem>
                </Dropdown>
                <Link className="flex gap-1 items-center" href="#"><DocumentTextIcon className="size-4"/>Informes</Link>
            </NavbarCollapse>
        </Navbar>
    )
}

export default NavbarTools