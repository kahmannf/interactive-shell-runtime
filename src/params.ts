
/**
 * Describes parameters that can be passed to a command
 */
export interface ISRParams {
  /**
   * Any flags provided by '--name' will be included in this array 
   */
  flags: string[]
  /**
   * Any options provided by name=value will be included in this object
   * with name as key and value as value
   */
  options: {
    [name: string]: string
  }
}
