/**
 * Removes a custom billing code from the central list of the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Billing_Code_BillingCodeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_code";

  /**
   * Whether the code is removed from the central list of the business.
   *
   * `true` for a code that is not offered for selection anymore, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_remove = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the custom billing code.
   *
   * @delete get
   * @get get
   * @post get
   * @put result
   * @type {string}
   */
  this.k_code = "";

  /**
   * Code value, as it is printed on receipts and invoices.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_code = "";

  /**
   * Description of the code.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_description = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Code_BillingCodeModel);

/**
 * @inheritDoc
 */
Wl_Billing_Code_BillingCodeModel.prototype.config=function()
{
  return {"a_field":{"is_remove":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_code":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"result":true}},"text_code":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"text_description":{"get":{"result":true},"post":{"post":true},"put":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Billing_Code_BillingCodeModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_code Key of the custom billing code.
 * @returns {Wl_Billing_Code_BillingCodeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Removes a custom billing code from the central list of the business.
 *
 * The code is not deleted - it stays on every receipt and invoice it has already been used on, and it keeps its
 * value occupied. Adding the same value again brings this very code back, see `put()`.
 * Removing a code that is removed already does nothing.
 *
 * @function
 * @name Wl_Billing_Code_BillingCodeModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns a single custom billing code of the business.
 *
 * A removed code is returned as well, with {@link Wl_Billing_Code_BillingCodeModel.is_remove} set - it is still shown on the
 * receipts it has been applied to.
 *
 * @function
 * @name Wl_Billing_Code_BillingCodeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Edits the value and the description of a custom billing code of the business.
 *
 * The new value applies going forward only - every receipt and invoice that has already been generated with the
 * old value keeps it.
 *
 * @function
 * @name Wl_Billing_Code_BillingCodeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Adds a custom billing code to the central list of the business.
 *
 * If the business has removed a code with this value before, that code is brought back with the new description
 * instead of a second code with the same value being created, and {@link Wl_Billing_Code_BillingCodeModel.k_code} returns the key
 * of that very code.
 *
 * @function
 * @name Wl_Billing_Code_BillingCodeModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
