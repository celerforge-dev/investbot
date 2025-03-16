"use client";

import { Icons } from "@/components/icons";
import { Logo } from "@/components/logo";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-4">
        <Link href="/">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Personal</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/" className="w-full">
                  <Icons.bot />
                  <span>Bots</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/portfolio" className="w-full">
                  <Icons.trendingUp />
                  <span>Portfolios</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Collapsible className="group/collapsible" defaultOpen={false}>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    isActive={pathname === "/chat"}
                    className="group/chat flex"
                  >
                    <div className="flex h-6 w-4 items-center justify-center">
                      <Icons.messageCircleMore className="block transition-opacity duration-200 group-hover/chat:hidden" />
                      <Icons.chevronRight className="hidden rounded transition-transform duration-200 group-hover/chat:block group-data-[state=open]/collapsible:rotate-90" />
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      Chat
                    </div>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  title="New chat"
                  className="absolute top-1 right-1 h-6 w-6 hover:bg-neutral-200"
                >
                  <Icons.squarePen scale={0.8} />
                </Button>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <AlertDialog>
                        <ContextMenu>
                          <ContextMenuTrigger>
                            <SidebarMenuSubButton asChild>
                              <Link href={`/chat/1`}>
                                <span>New chat</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </ContextMenuTrigger>
                          <ContextMenuContent>
                            <ContextMenuItem>
                              <AlertDialogTrigger className="text-destructive w-full text-left">
                                Delete Chat
                              </AlertDialogTrigger>
                            </ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete this chat and all its messages.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Explore</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/strategy" className="w-full">
                  <Icons.puzzle />
                  <span>Strategies</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
