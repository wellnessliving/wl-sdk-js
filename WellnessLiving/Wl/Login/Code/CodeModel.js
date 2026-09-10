/**
 * Applies login code.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Code_CodeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Key of source mode. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Key of current business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Login code.
   *
   * @post post
   * @type {string}
   */
  this.s_code = "";

  /**
   * Key of a user.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Code_CodeModel);

/**
 * @inheritDoc
 */
Wl_Login_Code_CodeModel.prototype.config=function()
{
  return {"a_field":{"id_mode":{"post":{"post":true}},"k_business":{"post":{"post":true}},"s_code":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Login_Code_CodeModel.instanceGet
 * @param {string} uid Key of a user.
 * @param {string} k_business Key of current business.
 * @returns {Wl_Login_Code_CodeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Applies login code.
 *
 * Validates the source mode, business, redemption code, and that the current user has access to
 * the target profile. Attempts to redeem the code as a coupon first; if the code is not a coupon,
 * falls back to checking it as another type of redemption code, for example a gift card number,
 * and logs the change.
 *
 * @function
 * @name Wl_Login_Code_CodeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
