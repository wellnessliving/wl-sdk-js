/**
 * Returns data to change visit pay option.
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
   * @typedef {{}} Wl_Visit_Pay_PayChangeModel_a_list_a_logo
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {string} url-thumbnail Thumbnail url.
   */

  /**
   * @typedef {{}} Wl_Visit_Pay_PayChangeModel_a_list
   * @property {Wl_Visit_Pay_PayChangeModel_a_list_a_logo} a_logo Promotion logo. Empty array for not paid option.
   * @property {boolean} is_select Whether current element selected in the list.
   * @property {string} s_key `0` means 'Single buy', `-1` means 'Not paid'. Otherwise key with next structure: `k_login_promotion:[k_login_promotion]` or `k_session_pass:[k_session_pass]`.
   * @property {string} text_title Title of select option.
   */

  /**
   * List of purchase options that can be applied to pay for visit:
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
   * Selected pay option to save. The value with one of next structures:
   * * `k_login_promotion`:`[k_login_promotion]`
   * * `k_session_pass`:`[k_session_pass]`
   *
   * @post post
   * @type {string}
   */
  this.text_key = "";

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
  return {"a_field":{"a_list":{"get":{"result":true}},"is_change":{"post":{"result":true}},"is_pay_now":{"get":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_visit":{"get":{"get":true},"post":{"get":true}},"text_key":{"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
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

/**
 * Returns data to change visit pay option.
 *
 * Loads the visit and returns the list of purchase options available for it, marking the
 * option that is currently applied. Guest visits without a client have no purchase options.
 *
 * @function
 * @name Wl_Visit_Pay_PayChangeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves user's promotion for certain attendance.
 *
 * Applies the selected promotion or session pass to the visit. Does nothing if the selected
 * option is already applied to the visit. Verifies that the caller has access to the visit
 * and that the selected promotion belongs to the visit's client before saving the change.
 *
 * @function
 * @name Wl_Visit_Pay_PayChangeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
