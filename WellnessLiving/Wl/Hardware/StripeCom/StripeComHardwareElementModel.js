/**
 * Removes terminal.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Hardware_StripeCom_StripeComHardwareElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Hardware model ID.
   *
   * @get result
   * @post post
   * @see Thoth_PayProcessor_StripeCom_Terminal_StripeReaderModelSid
   * @type {number}
   */
  this.id_model = 0;

  /**
   * Status ID.
   *
   * @get result
   * @post post
   * @see Thoth_PayProcessor_Terminal_TerminalStatusSid
   * @type {number}
   */
  this.id_status = 3;

  /**
   * IP address of terminal.
   *
   * Maybe an empty string as it is not set for all terminals.
   *
   * @get result
   * @type {?string}
   */
  this.ip_terminal = null;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * Terminal key.
   *
   * `null` in case when create new terminal.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {?string}
   */
  this.k_terminal = null;

  /**
   * Registration code.
   *
   * `null` in case when add terminal is not ethernet model.
   *
   * We do not save this field into database as of now.
   *
   * @post post
   * @type {?string}
   */
  this.s_registration_code = null;

  /**
   * Serial number. `null` in case when add terminal is ethernet model.
   *
   * @post post
   * @type {?string}
   */
  this.s_serial_number = null;

  /**
   * Terminal id, received from Stripe on frontend.
   * Not null only when the request is from the staff application and only for BT readers.
   *
   * @post post
   * @type {?string}
   */
  this.s_terminal_id = null;

  /**
   * Label of the terminal.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_label = "";

  /**
   * Location name.
   *
   * `null` in case when not initialized yet.
   *
   * @get result
   * @type {?string}
   */
  this.text_location = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Hardware_StripeCom_StripeComHardwareElementModel);

/**
 * @inheritDoc
 */
Wl_Hardware_StripeCom_StripeComHardwareElementModel.prototype.config=function()
{
  return {"a_field":{"id_model":{"get":{"result":true},"post":{"post":true}},"id_status":{"get":{"result":true},"post":{"post":true}},"ip_terminal":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"result":true},"post":{"post":true}},"k_terminal":{"delete":{"get":true},"get":{"get":true},"post":{"get":true,"result":true}},"s_registration_code":{"post":{"post":true}},"s_serial_number":{"post":{"post":true}},"s_terminal_id":{"post":{"post":true}},"text_label":{"get":{"result":true},"post":{"post":true}},"text_location":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Hardware_StripeCom_StripeComHardwareElementModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Hardware_StripeCom_StripeComHardwareElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Removes terminal.
 *
 * Validates the business, the terminal key, and the current user's access to hardware management, then
 * permanently removes the terminal record for the payment processor.
 *
 * @function
 * @name Wl_Hardware_StripeCom_StripeComHardwareElementModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Fetch terminal information.
 *
 * Validates the business, the terminal key, and the current user's access to hardware management, then
 * returns the current terminal data for the payment processor.
 *
 * @function
 * @name Wl_Hardware_StripeCom_StripeComHardwareElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates terminal.
 *
 * Creates a new `stripe.com` terminal reader when no terminal key is provided, or updates the status,
 * terminal ID, and label of an existing terminal identified by the terminal key.
 *
 * @function
 * @name Wl_Hardware_StripeCom_StripeComHardwareElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
