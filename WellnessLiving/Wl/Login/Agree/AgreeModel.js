/**
 * Returns text of business liability release if business has liability release and if user did not agree to this liability release.
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
   * Formatted text of business liability release. Not empty if the business has a liability release and if the user did not agree to this liability release.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * `false` if the user has not agreed to use Electronic Signatures,
   * `true` if the user has agreed to use Electronic Signatures,
   * `null` otherwise.
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
  this.k_business = "";

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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Agree_AgreeModel);

/**
 * @inheritDoc
 */
Wl_Login_Agree_AgreeModel.prototype.config=function()
{
  return {"a_field":{"html_contract":{"get":{"result":true}},"is_agree":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"s_signature":{"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Agree_AgreeModel.instanceGet
 * @param {string} uid The user's key.
 * @param {string} k_business The key of business.
 * @returns {Wl_Login_Agree_AgreeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns text of business liability release if business has liability release and if user did not agree to this liability release.
 *
 * Accepts the business key and the user key, validates both, and returns the rendered HTML of the liability release
 * contract if one is configured and the user has not yet agreed to it. If the user has already agreed, the response
 * will have an empty `html_contract` field.
 *
 * @function
 * @name Wl_Login_Agree_AgreeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves the user's agreement to the online waiver.
 *
 * Accepts the user's base64-encoded signature image and an optional electronic-signature consent flag, validates
 * both, records the agreement date and signature in the database, and sends a waiver confirmation notification.
 *
 * @function
 * @name Wl_Login_Agree_AgreeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
