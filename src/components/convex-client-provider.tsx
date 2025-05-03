"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import {ConvexAuthNextJsProvider} from '@convex-dev/auth/nextjs';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexAuthNextJsProvider client={convex}>{children}</ConvexAuthNextJsProvider>;
}