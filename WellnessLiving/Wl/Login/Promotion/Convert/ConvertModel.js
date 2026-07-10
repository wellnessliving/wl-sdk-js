/**
 * Removes conversion and reset the after expiration setting to previous state.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_Convert_ConvertModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_login_promotion";

  /**
   * @typedef {{}} Wl_Login_Promotion_Convert_ConvertModel_a_promotion
   * @property {number} id_program Program types.
   * @property {boolean} is_select If `true`, the promotion is related to the service. Otherwise, this will be `false`.
   * @property {string} k_promotion The promotion key.
   * @property {string} text_title The title of the promotion.
   */

  /**
   * Promotion data containing the following structure:.
   *
   * @get result
   * @type {Wl_Login_Promotion_Convert_ConvertModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * The conversion date, in the local time zone.
   *
   * @post get
   * @type {string}
   */
  this.dl_convert = "";

  /**
   * The last date on what conversion can be scheduled.
   *
   * @get result
   * @type {string}
   */
  this.dl_convert_max = undefined;

  /**
   * The first date on what conversion can be scheduled.
   *
   * @get result
   * @type {string}
   */
  this.dl_convert_min = undefined;

  /**
   * Local date, when hold ends, if PO is on hold right now.
   * Empty if PO is not on hold, or hold is endless.
   *
   * @get result
   * @type {string}
   */
  this.dl_hold_end = undefined;

  /**
   * Local date, when hold starts, if PO is on hold right now.
   * Empty if PO is not on hold.
   *
   * @get result
   * @type {string}
   */
  this.dl_hold_start = undefined;

  /**
   * The conversion ID. One of the {@link Wl_Promotion_Convert_PromotionConvertSid} constants.
   *
   * @get result
   * @post get
   * @see Wl_Promotion_Convert_PromotionConvertSid
   * @type {number}
   */
  this.id_convert = 0;

  /**
   * When conversion should be done. One of the {@link Wl_Login_Promotion_Convert_ConvertWhenSid} constants.
   *
   * `null` if it's not set yet.
   *
   * @get result
   * @post get
   * @see Wl_Login_Promotion_Convert_ConvertWhenSid
   * @type {?number}
   */
  this.id_convert_when = null;

  /**
   * Determines whether the conversion request is new or editing an existing conversion.
   *
   * If `true`, the conversion exists. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_edit = undefined;

  /**
   * `true` if PO is going to be renewed and not converted.
   * `false` if PO is going to expire or to convert.
   *
   * @get result
   * @type {boolean}
   */
  this.is_renew = undefined;

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The login promotion key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The promotion key the given promotion will be converted to.
   *
   * @post get
   * @type {string}
   */
  this.k_promotion_to = "";

  /**
   * The existing conversion date, returned as a string for the datepicker.
   *
   * @get result
   * @type {string}
   */
  this.s_date_convert = undefined;

  /**
   * The current date, returned as a string.
   *
   * @get result
   * @type {string}
   */
  this.s_date_now = undefined;

  /**
   * The Purchase Option title.
   *
   * @get result
   * @type {string}
   */
  this.s_title = undefined;

  /**
   * Expiration date in string user-friendly format.
   *
   * @get result
   * @type {string}
   */
  this.text_date_expire = undefined;

  /**
   * Next payment date in string user-friendly format.
   *
   * @get result
   * @type {string}
   */
  this.text_date_payment = undefined;

  /**
   * The note for the promotion conversion.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.text_note = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_Convert_ConvertModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_Convert_ConvertModel.prototype.config=function()
{
  return {"a_field":{"a_promotion":{"get":{"result":true}},"dl_convert":{"post":{"get":true}},"dl_convert_max":{"get":{"result":true}},"dl_convert_min":{"get":{"result":true}},"dl_hold_end":{"get":{"result":true}},"dl_hold_start":{"get":{"result":true}},"id_convert":{"get":{"result":true},"post":{"get":true}},"id_convert_when":{"get":{"result":true},"post":{"get":true}},"is_edit":{"get":{"result":true}},"is_renew":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_login_promotion":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_promotion_to":{"post":{"get":true}},"s_date_convert":{"get":{"result":true}},"s_date_now":{"get":{"result":true}},"s_title":{"get":{"result":true}},"text_date_expire":{"get":{"result":true}},"text_date_payment":{"get":{"result":true}},"text_note":{"get":{"result":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Promotion_Convert_ConvertModel.instanceGet
 * @param {string} k_login_promotion The login promotion key.
 * @returns {Wl_Login_Promotion_Convert_ConvertModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Removes conversion and reset the after expiration setting to previous state.
 *
 * Validates access, removes the scheduled conversion record for the given purchased promotion, restores the
 * previous auto-renew state, and reschedules the payment if the promotion is a membership type.
 *
 * @function
 * @name Wl_Login_Promotion_Convert_ConvertModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns the current conversion configuration and the list of promotions available to convert to.
 *
 * Returns the current conversion type, scheduled date, target promotion, hold period dates, next payment date,
 * expiration date, and the list of promotions available as conversion targets for the given purchased promotion.
 *
 * @function
 * @name Wl_Login_Promotion_Convert_ConvertModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates or updates conversion form data for the login promotion.
Performs all necessary checks and apply changes.
 *
 * Validates access, the target promotion key, conversion type, conversion timing, and the optional scheduled date,
 * then saves the conversion settings. Returns an error if the user is a debtor.
 *
 * @function
 * @name Wl_Login_Promotion_Convert_ConvertModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
