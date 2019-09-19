/**
 * Interface to provide information about a command
 */
export interface ISRCommandInfo {
  /**
   * A descriptio of the command
   */
  description: string[]
  /**
   * The name of the command
   */
  name: string
  /**
   * Any flags that can be applyed to the command
   */
  flage: ISRCFlagInfo[]
  /**
   * any options that can be passed to the command
   */
  options: ISRCOptionInfo[]
}

/**
 * Describes a flag that can be supplied to a command
 */
export interface ISRCFlagInfo {
  /**
   * Name of the flage
   */
  name: string
  /**
   * Description of what the parameter does when it is supplied
   */
  description: string
}

/**
 * Describes a option that can be supplied to a command
 */
export interface ISRCOptionInfo extends ISRCFlagInfo {
  /**
   * The expected type of input.
   * e.g.: 'string', 'string or number', 'integer'
   * this will NOT be checked by the runtime
   */
  dataType: string
  /**
   * Indicvates whether the option is required for a successful Execution.
   * This WILL be checked by the runtime
   */
  required: boolean
}
