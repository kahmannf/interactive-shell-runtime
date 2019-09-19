import { ISRContextFactory } from "./context-factory";
import { ISRCommand } from "./command";

export abstract class InteractiveShellRuntime<TContext> {

  abstract commands: { [name: string]: ISRCommand<TContext> }

  private ctx?: TContext = undefined

  constructor(private contextFactory: ISRContextFactory<TContext>) {
    if(!contextFactory) {
      throw new TypeError('Invalid value for parameter "contextFactory"')
    }
  }



  run() {
    this.ctx =  this.contextFactory.createContext()

    throw new Error('Input loop not implemented!')
  }
}
