/**
 * Information about online waiver.
 *
 * This model is generated automatically based on API.
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
   * Date/time of the waiver confirmation. <tt>null</tt> if waiver is not confirmed.
   *
   * @get result
   * @type {?string}
   */
  this.dt_agree = null;

  /**
   * Text of online waiver.
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
   * The IP address from which the confirmation was carried out. <tt>null</tt> if waiver is not confirmed.
   *
   * @get result
   * @type {?string}
   */
  this.ip_agree = null;

  /**
   * Flag of successful saving agreement.
   * <tt>true</tt> if agreement was sign up successful <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_agree = undefined;

  /**
   * Key of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User's name.
   *
   * @get result
   * @type {string}
   */
  this.s_name = undefined;

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  /**
   * URL to image with client's signature. <tt>false</tt> if waiver is not confirmed.
   *
   * @get result
   * @type {string|boolean}
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
  return {"a_field": {"dt_agree": {"get": {"result": true}},"html_contract": {"get": {"result": true}},"i_minor_age": {"get": {"result": true}},"ip_agree": {"get": {"result": true}},"is_agree": {"get": {"result": true}},"k_business": {"get": {"get": true}},"s_name": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_signature": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Term_TermModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {string} k_business Key of current business.
 * @returns {Wl_Profile_Term_TermModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */