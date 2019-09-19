import { ISRParams } from "./params";
import { ISRCommandInfo } from "./command-info";

/**
 * Describes an executable shell command
 */
export interface ISRCommand<TContext> {
  execute(param: ISRParams, ctx: TContext): Promise<ISRCommandResult>
  getCompletionProposals(current: string[], ctx: TContext): string[]
  getCommandInfo(): ISRCommandInfo
}

/**
 * A result retuned by the execute-method of an ISRCommand
 */
export interface ISRCommandResult {
  /**
   * Flag used to inform the runtime that it should exit after the command retuned this result
   */
  exit: boolean
  /**
   * Flag used to inform the runtime htat it should refresh the context before executing other commands
   */
  refreshContext: boolean
}
