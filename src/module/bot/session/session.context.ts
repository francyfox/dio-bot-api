import { Context as ContextTelegraf } from 'telegraf';

export interface Context extends ContextTelegraf {
  scene: any;
  __session: {
    token: string;
  };
}
