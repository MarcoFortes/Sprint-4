"use client"

import { Bell, Search } from "lucide-react"

export function AdminTopbar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border bg-background px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground text-balance">Controle de Fraudes</h1>
        <p className="text-sm text-muted-foreground">Monitore e bloqueie perfis suspeitos</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar..."
            aria-label="Buscar"
            className="h-10 w-64 rounded-lg border border-border bg-card pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notificações"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-destructive" />
        </button>

        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-1.5 text-left transition-colors hover:bg-accent"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
            AM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-foreground">Admin Master</span>
            <span className="block text-xs text-muted-foreground">Operações</span>
          </span>
        </button>
      </div>
    </header>
  )
}
