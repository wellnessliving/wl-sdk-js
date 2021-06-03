/**
 * Saves user's agreement to online waiver.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Agree_AgreeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * ID of business.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The base64 encoded user's signature image in PNG.
   *
   * @post post
   * @type {string}
   */
  this.s_signature = false;

  /**
   * User's ID.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Agree_AgreeModel);

/**
 * @inheritDoc
 */
Wl_Login_Agree_AgreeModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"s_signature": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Agree_AgreeModel.instanceGet
 * @param {string} uid User's ID. Primary key in {@link \PassportLoginSql}.
 * @param {string} k_business ID of business. Primary key in {@link \RsBusinessSql}.
 * @returns {Wl_Login_Agree_AgreeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */