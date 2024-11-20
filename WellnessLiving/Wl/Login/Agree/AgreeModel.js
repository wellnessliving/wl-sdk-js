/**
 * An endpoint that saves the user's agreement to the online waiver.
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
   * Formatted text of business liability release. Not empty if business has liability release and if user did not agree to this liability release.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = "";

  /**
   * <tt>false</tt> if user has not agreed to use Electronic Signatures,
   * <tt>true</tt> if user has agreed to use Electronic Signatures,
   * <tt>null</tt> otherwise.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_agree = null;

  /**
   * The key of business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The base64-encoded user's signature image from the signature pad as a PNG file.
   *
   * @post post
   * @type {string}
   */
  this.s_signature = "";

  /**
   * The user's key.
   *
   * @get get
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
  return {"a_field": {"html_contract": {"get": {"result": true}},"is_agree": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"s_signature": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Agree_AgreeModel.instanceGet
 * @param {string} uid The user's key.
 * @param {string} k_business The key of business.
 * @returns {Wl_Login_Agree_AgreeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */