/**
 * Manages changing purchase option to pay for visit.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Pay_PayChangeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit,uid";

  /**
   * @typedef {{}} Wl_Visit_Pay_PayChangeModel_a_list
   * @property {{}} a_logo Promotion logo, see result of {@link \RsPromotionImageLogo::data()}. Empty array for not paid option.
   * @property {boolean} is_select Whether current element selected in the list.
   * @property {string} s_key <tt>0</tt> means 'Single buy', <tt>-1</tt> means 'Not paid'. Otherwise key with next structure: <tt>k_login_promotion:[k_login_promotion]</tt> or <tt>k_session_pass:[k_session_pass]</tt>.
   * @property {string} text_title Title of select option.
   */

  /**
   * List of purchase options that can be applied to pay for visit:
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *   <dd>
   *     Promotion logo, see result of {@link \RsPromotionImageLogo::data()}. Empty array for not paid option.
   *   </dd>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     Whether current element selected in the list.
   *   </dd>
   *   <dt>
   *     string <var>s_key</var>
   *   </dt>
   *   <dd>
   *     <tt>0</tt> means 'Single buy', <tt>-1</tt> means 'Not paid'. Otherwise key with next structure: <tt>k_login_promotion:[k_login_promotion]</tt> or <tt>k_session_pass:[k_session_pass]</tt>.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of select option.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Visit_Pay_PayChangeModel_a_list}
   */
  this.a_list = undefined;

  /**
   * Whether changes applied to visit (if user selected the same promotion, we should do nothing).
   *
   * @post result
   * @type {boolean}
   */
  this.is_change = undefined;

  /**
   * Defines whether 'pay now' option should be present.
   *
   * @get get
   * @type {boolean}
   */
  this.is_pay_now = false;

  /**
   * Business key.
   *
   * Empty value means not set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class period key.
   *
   * Empty value means not set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Selected pay option to save.
   *
   * @post post
   * @type {string}
   */
  this.text_key = "0";

  /**
   * Current user ID.
   *
   * Empty value means not set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Pay_PayChangeModel);

/**
 * @inheritDoc
 */
Wl_Visit_Pay_PayChangeModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"is_change": {"post": {"result": true}},"is_pay_now": {"get": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_visit": {"get": {"get": true},"post": {"get": true}},"text_key": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Visit_Pay_PayChangeModel.instanceGet
 * @param {string} k_business Business key. Empty value means not set.
 * @param {string} k_visit Class period key. Empty value means not set.
 * @param {string} uid Current user ID. Empty value means not set.
 * @returns {Wl_Visit_Pay_PayChangeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */