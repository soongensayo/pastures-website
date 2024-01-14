import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcedure, publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
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

    //check if user is in the database
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id
      }
    })

    if (!dbUser) {
      //create user in db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email
        }
      })
    }

    return { success: true };
  }),

  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx

    return await db.telebot.findMany({
      where: {
        userId,
      },
    })
  }),

  deleteFile: privateProcedure.input(
    z.object({ id: z.string() })
  ).mutation(async ({ctx, input}) => {
    const {userId} = ctx

    const telebot = await db.telebot.findFirst({
      where: {
        id: input.id,
        userId,
      }
    })

    if(!telebot) throw new TRPCError({code: "NOT_FOUND"})

    await db.telebot.delete({
      where: {
        id: input.id,
      }
    })
    
    return telebot
  })

});

export type AppRouter = typeof appRouter;