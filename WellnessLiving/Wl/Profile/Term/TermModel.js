/**
 * Returns online waiver information for the specified user and business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Term_TermModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * The date/time of the waiver confirmation.
   * `null` if waiver is not confirmed.
   *
   * @get result
   * @type {?string}
   */
  this.dt_agree = null;

  /**
   * The text of the online waiver.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * Age of minor which documents can be signed by parent or legal guardian.
   *
   * @get result
   * @type {number}
   */
  this.i_minor_age = undefined;

  /**
   * The IP address from which the confirmation was carried out.
   * `null` if waiver is not confirmed.
   *
   * @get result
   * @type {?string}
   */
  this.ip_agree = null;

  /**
   * Flag of successful saving agreement.
   * `true` if agreement was sign up successful `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_agree = undefined;

  /**
   * The key of the current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user's name.
   *
   * @get result
   * @type {string}
   */
  this.s_name = undefined;

  /**
   * The key of the user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * The URL to the image with the client's signature.
   * `false` if waiver is not confirmed.
   *
   * @get result
   * @type {*}
   */
  this.url_signature = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Term_TermModel);

/**
 * @inheritDoc
 */
Wl_Profile_Term_TermModel.prototype.config=function()
{
  return {"a_field":{"dt_agree":{"get":{"result":true}},"html_contract":{"get":{"result":true}},"i_minor_age":{"get":{"result":true}},"ip_agree":{"get":{"result":true}},"is_agree":{"get":{"result":true}},"k_business":{"get":{"get":true}},"s_name":{"get":{"result":true}},"uid":{"get":{"get":true}},"url_signature":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Term_TermModel.instanceGet
 * @param {string} uid The key of the user to show information for.
 * @param {string} k_business The key of the current business.
 * @returns {Wl_Profile_Term_TermModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns online waiver information for the specified user and business.
 *
 * Returns the rendered online waiver text for the business along with the client's current
 * agreement status. Used to display the waiver page and show whether the client has already
 * signed, including their signature image and the confirmation timestamp.
 *
 * @function
 * @name Wl_Profile_Term_TermModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
