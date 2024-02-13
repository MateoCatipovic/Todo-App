// supabase.js
// supabaseClient.ts-

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./configurations/auth";

export const getSupabase = async (): Promise<SupabaseClient | null> => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const supabaseAccessToken = session.supabaseAccessToken;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

  const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });

  return supabase;
};

