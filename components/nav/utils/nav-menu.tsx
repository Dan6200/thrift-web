// cspell:ignore womens
'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ModeToggle } from '../../dark-mode-toggle'
import { Button } from '../../ui/button'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ListItem } from '../utils/list-item'
import { components } from '../utils/nav-components'
import { ShoppingCart, UserCircle2 } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { UserAccount } from '@/components/user-account/types'
import { getTotalCountAtom } from '@/atoms'
import { ShoppingCartDrawer } from '@/components/shopping-cart/drawer'
import Search from '@/components/search'
import { signOutWrapper } from '@/app/auth'
import { Montagu_Slab } from 'next/font/google'

type SetUser = ReturnType<typeof useSetAtom<UserAccount | null, any[], any>>

const font = Montagu_Slab({ weight: '500', subsets: ['latin'] })

export function NavMenu({
  user,
  setUser,
}: {
  user: (UserAccount & { token: string }) | null
  setUser: SetUser
}) {
  const totalItems = useAtomValue(getTotalCountAtom)
  const [isOpen, toggleDrawer] = useState(false)
  const searchRef = useRef<null | HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    document.addEventListener('click', hide)
    return () => document.addEventListener('click', hide)
  }, [])
  const hide = (e: Event) => {
    if (searchRef.current && !searchRef.current.contains(e.target as any)) {
      setShow(false)
    }
  }
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
