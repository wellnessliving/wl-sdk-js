/**
 * Methods to accept redemption code or number of gift card.
 *
 * This model is generated automatically based on API.
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
   * Key of source mode. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Key of current business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

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
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Code_CodeModel);

/**
 * @inheritDoc
 */
Wl_Login_Code_CodeModel.prototype.config=function()
{
  return {"a_field": {"id_mode": {"post": {"post": true}},"k_business": {"post": {"post": true}},"s_code": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Login_Code_CodeModel.instanceGet
 * @param {string} uid Key of a user.
 * @param {string} k_business Key of current business.
 * @returns {Wl_Login_Code_CodeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */