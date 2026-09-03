import { motion } from "framer-motion";
import {
    Activity,
    ArrowDown,
    ArrowRight,
    Box,
    CheckCircle2,
    Database,
    GitBranch,
    Globe,
    Layers3,
    Radio,
    Server,
    Workflow
} from "lucide-react";

import type { Project } from "../types/project";

interface ProjectVisualProps {
  project: Project;
}

function Node({
  children,
  icon: Icon,
  className = "",
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2.5 backdrop-blur-sm ${className}`}
    >
      {Icon && <Icon size={13} className="text-white/45" />}
      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
        {children}
      </span>
    </div>
  );
}

function Connector({
  vertical = false,
}: {
  vertical?: boolean;
}) {
  return (
    <div
      className={
        vertical
          ? "h-5 w-px bg-gradient-to-b from-white/20 to-transparent"
          : "h-px w-7 bg-gradient-to-r from-white/20 to-transparent"
      }
    />
  );
}

function InventoryVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Ambient grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <motion.div
        className="relative z-10 flex w-[88%] max-w-[540px] flex-col items-center"
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
            inventory architecture
          </span>
        </div>

        <div className="flex w-full items-center justify-between gap-3">
          <Node icon={Globe}>Storefront</Node>

          <Connector />

          <Node icon={Server} className="border-white/[0.16]">
            Inventory API
          </Node>

          <Connector />

          <Node icon={Box}>Warehouse</Node>
        </div>

        <div className="relative flex h-12 items-center">
          <div className="h-full w-px bg-gradient-to-b from-white/25 to-transparent" />
          <motion.div
            className="absolute left-[-2px] top-1 h-1 w-1 rounded-full bg-white"
            animate={{ y: [0, 34, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="w-full rounded-xl border border-white/[0.1] bg-black/30 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
              system of record
            </span>

            <span className="flex items-center gap-1.5 font-mono text-[8px] text-white/30">
              <span className="h-1 w-1 rounded-full bg-white/50" />
              consistent
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Node icon={Database}>PostgreSQL</Node>
            <Node icon={Radio}>Event Stream</Node>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Connector />

          <Node icon={Workflow}>Partner API</Node>

          <Connector />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
    </div>
  );
}

function CollaborationVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        className="relative z-10 w-[82%] max-w-[500px]"
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              realtime collaboration
            </p>
            <p className="mt-1 text-xs text-white/25">
              shared document state
            </p>
          </div>

          <div className="flex -space-x-2">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-black bg-white/[0.08] text-[8px] text-white/50"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 2 + item * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                U{item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl border border-white/[0.1] bg-black/35 p-5">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />

          <div className="space-y-2.5">
            <div className="h-2 w-[72%] rounded-full bg-white/[0.09]" />
            <div className="h-2 w-[90%] rounded-full bg-white/[0.06]" />
            <div className="h-2 w-[58%] rounded-full bg-white/[0.09]" />

            <div className="relative mt-4 h-8">
              <motion.div
                className="absolute left-[25%] top-0 h-full w-px bg-white/40"
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="absolute left-[62%] top-0 h-full w-px bg-white/20"
                animate={{ opacity: [0.15, 0.7, 0.15] }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                }}
              />
            </div>

            <div className="h-2 w-[82%] rounded-full bg-white/[0.07]" />
            <div className="h-2 w-[46%] rounded-full bg-white/[0.05]" />
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
              CRDT state
            </span>

            <span className="flex items-center gap-1.5 font-mono text-[8px] text-white/30">
              <Activity size={10} />
              synced
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <Node icon={Radio}>WebSocket</Node>
          <Node icon={Database}>Redis</Node>
          <Node icon={Database}>Postgres</Node>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055),transparent_58%)]" />
    </div>
  );
}

function DeveloperPlatformVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <motion.div
        className="relative z-10 w-[82%] max-w-[500px]"
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
            developer platform
          </span>

          <span className="flex items-center gap-1.5 font-mono text-[8px] text-white/30">
            <CheckCircle2 size={10} />
            deployed
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <Node icon={Box}>Service template</Node>

          <ArrowRight size={14} className="text-white/20" />

          <Node icon={GitBranch}>CI / CD</Node>
        </div>

        <div className="flex justify-center py-5">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} className="text-white/25" />
          </motion.div>
        </div>

        <div className="rounded-xl border border-white/[0.1] bg-black/35 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Server size={13} className="text-white/35" />
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
              production
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Node icon={Activity}>Metrics</Node>
            <Node icon={Layers3}>Logging</Node>
            <Node icon={CheckCircle2}>Health</Node>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Node icon={Workflow}>repeatable deployment</Node>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_58%)]" />
    </div>
  );
}

function GenericVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <motion.div
        className="relative flex items-center gap-4"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5 }}
      >
        <Node icon={Globe}>Input</Node>
        <Connector />
        <Node icon={Server}>System</Node>
        <Connector />
        <Node icon={Database}>Data</Node>
      </motion.div>
    </div>
  );
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  switch (project.slug) {
    case "order-and-inventory-platform":
      return <InventoryVisual />;

    case "realtime-collaboration-service":
      return <CollaborationVisual />;

    case "internal-developer-platform":
      return <DeveloperPlatformVisual />;

    default:
      return <GenericVisual />;
  }
}