"use client"

import { Bus, LayoutGrid, ReceiptText, ShieldCheck, ScrollText } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, active: false },
  { label: "Gestão de Tarifas", icon: ReceiptText, active: false },
  { label: "Controle de Fraudes", icon: ShieldCheck, active: true },
  { label: "Logs do Sistema", icon: ScrollText, active: false },
]

export function AdminSidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Bus className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <p className="text-base font-bold text-sidebar-accent-foreground">TRANSCOR</p>
          <p className="text-xs text-sidebar-foreground">SDVBO Admin</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="mt-2 flex flex-col gap-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href="#"
              aria-current={item.active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </a>
          )
        })}
      </nav>

      {/* Footer user */}
      <div className="mt-auto border-t border-sidebar-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent text-xs font-semibold text-sidebar-accent-foreground">
            AD
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-sidebar-accent-foreground">Admin Operações</p>
            <p className="text-xs text-sidebar-foreground">Sessão segura</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
