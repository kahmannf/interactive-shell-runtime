/**
 * Factory that provides a context object that will be passed to all executed commands
 */
export interface ISRContextFactory<TContext> {
  /**
   * Methode called on runtime initialization to get the foirst context
   */
  createContext(): TContext
  /**
   * Methode called when a parameter requests a context refresh
   * @param old previous context object
   */
  refreshContext(old: TContext): TContext
}
