/**
 * Retrieves request about password resetting of the user.
 * Reset password or not, accordingly to permissions.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Password_Reset_PasswordResetModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> if the password reset attempt was last; <tt>false</tt> otherwise.
   *
   * @post result
   * @type {boolean}
   */
  this.is_last = undefined;

  /**
   * Key of business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of user which password resetting.
   *
   * @post post
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Password_Reset_PasswordResetModel);

/**
 * @inheritDoc
 */
Wl_Profile_Password_Reset_PasswordResetModel.prototype.config=function()
{
  return {"a_field": {"is_last": {"post": {"result": true}},"k_business": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};