import { headers } from "next/headers";

import type { RouterOutputs } from "@acme/api";
import { appRouter, createTRPCContext } from "@acme/api";

import { auth } from "~/auth/server";

export type Setup = RouterOutputs["setup"]["all"][0];

export interface SetupsResult {
  data: Setup[] | null;
  error: string | null;
}

export async function getSetups(): Promise<SetupsResult> {
  try {
    const heads = await headers();
    const ctx = await createTRPCContext({ headers: heads, auth });
    const setups = await appRouter.createCaller(ctx).setup.all();

    return {
      data: setups,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Failed to fetch setups",
    };
  }
}
