import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcedure, publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod'

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) { // Separate check for user being null
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    if (!user.id || !user.email) { // Now TypeScript knows user is not null
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    
    

    return { success: true };
  }),

  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx

    
  }),


});

export type AppRouter = typeof appRouter;