/**
 * Retrieves information about users by email.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Add_ProfilePurchaseOptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * User's active purchase options data.
   * For more details see .
   *
   * Serialized with JSON.
   *
   * @get result
   * @type {string}
   */
  this.json_promotion_active = undefined;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * UID of a user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Add_ProfilePurchaseOptionModel);

/**
 * @inheritDoc
 */
Wl_Login_Add_ProfilePurchaseOptionModel.prototype.config=function()
{
  return {"a_field":{"json_promotion_active":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Add_ProfilePurchaseOptionModel.instanceGet
 * @param {string} k_business The key of the business.
 * @param {string} uid UID of a user.
 * @returns {Wl_Login_Add_ProfilePurchaseOptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about users by email.
 *
 * Validates that the business and the user exist and that the current user has access to view the
 * user's profile, then loads the user's active purchase options and returns them as a JSON-encoded string.
 *
 * @function
 * @name Wl_Login_Add_ProfilePurchaseOptionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
