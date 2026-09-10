/**
 * Gets data about who pays for a given user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Family_Pay_PayModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * ID of business to get information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * ID of user to get information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  /**
   * ID of user who will pay for user {@link Wl_Family_Pay_PayModel.uid}.
   *
   * Empty if {@link Wl_Family_Pay_PayModel.uid} will pay for self.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.uid_payer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Family_Pay_PayModel);

/**
 * @inheritDoc
 */
Wl_Family_Pay_PayModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}},"uid_payer":{"get":{"result":true},"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Family_Pay_PayModel.instanceGet
 * @param {string} uid ID of user to get information for.
 * @param {string} k_business ID of business to get information for.
 * @returns {Wl_Family_Pay_PayModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets data about who pays for a given user.
 *
 * Checks that the current user has access to the target user's profile, either through general
 * profile access or through store-sell privilege combined with business access, and that neither
 * user is restricted from this operation by franchise rules. Returns the current payer for the
 * user, or an empty value if the user pays for themself.
 *
 * @function
 * @name Wl_Family_Pay_PayModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Sets that user {@link Wl_Family_Pay_PayModel.uid_payer} pays for user {@link Wl_Family_Pay_PayModel.uid}.
 *
 * Validates that the current user has access to the target user's profile and that the payer and
 * the target user are family relatives. Rejects the request if the payer already pays for another
 * user, if another user already pays for the target user, or if either user is restricted by
 * franchise rules. Persists the new payer relationship in a database transaction.
 *
 * @function
 * @name Wl_Family_Pay_PayModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
