"use client"

import { Ban, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

type UserRow = {
  id: string
  name: string
  initials: string
  document: string
  lastTrip: string
  validations: number
  status: "Regular" | "Suspeito"
}

const users: UserRow[] = [
  {
    id: "U-10293",
    name: "Mariana Costa",
    initials: "MC",
    document: "***.412.882-**",
    lastTrip: "há 2 min",
    validations: 3,
    status: "Regular",
  },
  {
    id: "U-10488",
    name: "Rafael Andrade",
    initials: "RA",
    document: "***.118.220-**",
    lastTrip: "há 1 min",
    validations: 27,
    status: "Suspeito",
  },
  {
    id: "U-10512",
    name: "Beatriz Lima",
    initials: "BL",
    document: "***.901.334-**",
    lastTrip: "há 6 min",
    validations: 4,
    status: "Regular",
  },
  {
    id: "U-10677",
    name: "Carlos Mendes",
    initials: "CM",
    document: "***.554.019-**",
    lastTrip: "há 30 s",
    validations: 41,
    status: "Suspeito",
  },
  {
    id: "U-10704",
    name: "Juliana Rocha",
    initials: "JR",
    document: "***.230.776-**",
    lastTrip: "há 9 min",
    validations: 2,
    status: "Regular",
  },
]

function StatusBadge({ status }: { status: UserRow["status"] }) {
  if (status === "Regular") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Regular
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
      <AlertTriangle className="h-3.5 w-3.5" />
      Suspeito
    </span>
  )
}

export function FraudTable() {
  return (
    <section className="rounded-xl border border-border bg-card shadow-sm">
      {/* Card header */}
      <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <h2 className="text-lg font-bold text-foreground">Usuários Ativos</h2>
            <p className="text-sm text-muted-foreground">
              Monitoramento de perfis e bloqueio de contas suspeitas (RF14)
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
          5 ativos
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <th className="px-6 py-3 font-semibold">Usuário</th>
              <th className="px-6 py-3 font-semibold">Documento</th>
              <th className="px-6 py-3 font-semibold">Última Viagem</th>
              <th className="px-6 py-3 font-semibold">Validações (1h)</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 text-right font-semibold">Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border last:border-0">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                      {user.initials}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-foreground">{user.name}</p>
                      <p className="font-mono text-xs text-muted-foreground">{user.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{user.document}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{user.lastTrip}</td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "text-sm font-bold",
                      user.status === "Suspeito" ? "text-destructive" : "text-foreground",
                    )}
                  >
                    {user.validations}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={user.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg bg-destructive px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-destructive/90"
                    >
                      <Ban className="h-4 w-4" />
                      Bloquear Conta
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
