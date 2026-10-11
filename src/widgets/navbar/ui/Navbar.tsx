"use client";

import { ActionIcon, Button, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, SunMedium } from "lucide-react";
import logo from "@/src/shared/assets/logo3.png";
import { getNavigationItems } from "../model/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);
  const items = getNavigationItems();

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="relative h-10 w-28 overflow-hidden" aria-label="MyRobo home">
            <Image src={logo} alt="MyRobo" fill className="w-[300px] h-[200px]" sizes="112px" priority />
          </Link>

          <Group gap="lg" className="hidden md:flex">
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={active(item.href) ? "text-blue-600" : "text-slate-600 hover:text-slate-900"}
              >
                {item.label}
              </Link>
            ))}
          </Group>

          <Group gap="sm">
            <ActionIcon variant="default" radius="xl" size="lg">
              <SunMedium size={18} />
            </ActionIcon>

            <Button component={Link} href="/login" variant="filled" size="sm" radius="xl" className="hidden md:inline-flex">
              Kirish
            </Button>

            <ActionIcon variant="default" radius="xl" size="lg" className="md:hidden" onClick={toggle}>
              <MenuIcon size={18} />
            </ActionIcon>
          </Group>
        </div>
      </header>

      <Drawer opened={opened} onClose={close} title="Menu" position="right" size="80%" padding="md">
        <Stack gap="sm">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              onClick={close}
              className={active(item.href) ? "rounded-xl bg-blue-50 px-3 py-2 text-blue-700" : "rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-100"}
            >
              {item.label}
            </Link>
          ))}

          <Button component={Link} href="/login" variant="filled" fullWidth>
            Kirish
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
