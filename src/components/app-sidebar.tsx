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
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible className="group/collapsible" defaultOpen={false}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={pathname === "/chat"}
                  className="group/chat flex"
                >
                  <div className="flex h-4 w-4 items-center justify-center">
                    <Icons.botMessageSquare className="block transition-opacity duration-200 group-hover/chat:hidden" />
                    <CollapsibleTrigger asChild>
                      <Icons.chevronRight className="-ml-1 hidden h-5 w-5 rounded transition-transform duration-200 group-hover/chat:block group-data-[state=open]/collapsible:rotate-90 hover:bg-neutral-200" />
                    </CollapsibleTrigger>
                  </div>
                  <Link
                    href="/"
                    className="flex flex-1 items-center justify-between"
                    title="New chat"
                  >
                    Chat
                    <Icons.circlePlus className="hidden h-4 w-4 group-hover/chat:block" />
                  </Link>
                </SidebarMenuButton>
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
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
