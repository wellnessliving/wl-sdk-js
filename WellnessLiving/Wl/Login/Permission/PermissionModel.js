/**
 * Saves the auto-renew setting for a purchased promotion.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Permission_PermissionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_login_promotion";

  /**
   * If `true`, the purchased promotion has been made auto-renewable. Otherwise, this will be `false`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_renew = false;

  /**
   * The key of the purchased promotion.
   *
   * @post get
   * @type {string}
   */
  this.k_login_promotion = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Permission_PermissionModel);

/**
 * @inheritDoc
 */
Wl_Login_Permission_PermissionModel.prototype.config=function()
{
  return {"a_field":{"is_renew":{"post":{"post":true}},"k_login_promotion":{"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Permission_PermissionModel.instanceGet
 * @param {string} k_login_promotion The key of the purchased promotion.
 * @returns {Wl_Login_Permission_PermissionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Saves the auto-renew setting for a purchased promotion.
 *
 * Validates the purchased promotion, checks profile access, and sets the auto-renew flag to the value of
 * `is_renew`. Returns an error if the promotion does not support auto-renewal or if the client is a debtor.
 *
 * @function
 * @name Wl_Login_Permission_PermissionModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
