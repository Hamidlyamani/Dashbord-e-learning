
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible-dashboard"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar-dashboard"


type NavItem = {
  title: string
  url: string
  icon: string
}

type NavMainProps = {
  items: NavItem[]
  onNavClick: (page: string) => void
  activePage: string
}

export function NavMain({ items, onNavClick, activePage }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const itemKey = item.title.toLowerCase();
          const isActive = itemKey === activePage;

          return (
            <Collapsible
              onClick={() => onNavClick(itemKey)}
              key={item.title}
              asChild
              defaultOpen={isActive}
              className={`group/collapsible p-2 py-3.5 transition-colors duration-200 hover:bg-[#5dabff2f] ${isActive ? 'bg-[#5dabff2f]' : ''
                }`}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <img src={item.icon} alt="" />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent />
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
