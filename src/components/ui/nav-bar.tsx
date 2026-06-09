import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem,} from "@/components/ui/navigation-menu";
import { Button} from "@/components/ui/button";

export function NavBar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50" >
      <div className="container mx-auto flex items-center h-16 justify-between px-4">
        <div className="flex items-center gap-2">

        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900" >
          Wiki Masters
        </Link>
        <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem><Button asChild variant="outline" ><Link href="/">SignIn</Link></Button></NavigationMenuItem>
            <NavigationMenuItem><Button asChild variant="outline" ><Link href="/SignUp">SignUp</Link></Button></NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}