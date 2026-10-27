/**
 * Previews whether a surcharge is allowed for a card.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_WlPay_Form_Surcharge_SurchargeTenderModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_pay_method,k_business,k_currency,k_location,k_pay_bank,s_bin";

  /**
   * Payment method the card would be charged with.
   *
   * Must be {@link RsPayMethodSid} or {@link RsPayMethodSid}.
   *
   * @get get
   * @see RsPayMethodSid
   * @type {?number}
   */
  this.id_pay_method = null;

  /**
   * Whether a surcharge is allowed for the card identified by
   * {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.s_bin} or {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.k_pay_bank}.
   *
   * `true` whenever the business's processor is not subject to the rule, or the rule does not apply to this
   * country/pay method - exactly the same meaning as "do not suppress", never a stand-in for "lookup failed".
   *
   * @get result
   * @type {boolean}
   */
  this.is_allowed = true;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Currency key.
   *
   * @get get
   * @type {string}
   */
  this.k_currency = "";

  /**
   * Location key.
   *
   * `null`/`'0'` to use the system-wide merchant.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Key of a saved card to preview.
   *
   * Exactly one of {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.k_pay_bank} and {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.s_bin} must be set.
   *
   * @get get
   * @type {?string}
   */
  this.k_pay_bank = null;

  /**
   * First digits of a newly-typed card number (at least 6).
   *
   * Exactly one of {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.k_pay_bank} and {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.s_bin} must be set.
   *
   * @get get
   * @type {?string}
   */
  this.s_bin = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_WlPay_Form_Surcharge_SurchargeTenderModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.prototype.config=function()
{
  return {"a_field":{"id_pay_method":{"get":{"get":true}},"is_allowed":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_currency":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_pay_bank":{"get":{"get":true}},"s_bin":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.instanceGet
 * @param {?number} id_pay_method Payment method the card would be charged with. Must be {@link RsPayMethodSid} or {@link RsPayMethodSid}.
 * @param {string} k_business Business key.
 * @param {string} k_currency Currency key.
 * @param {string} k_location Location key. `null`/`'0'` to use the system-wide merchant.
 * @param {?string} k_pay_bank Key of a saved card to preview. Exactly one of {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.k_pay_bank} and {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.s_bin} must be set.
 * @param {?string} s_bin First digits of a newly-typed card number (at least 6). Exactly one of {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.k_pay_bank} and {@link Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.s_bin} must be set.
 * @returns {Thoth_WlPay_Form_Surcharge_SurchargeTenderModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Previews whether a surcharge is allowed for a card.
 *
 * Called while the client is typing a card number, or has selected a saved card, so the browser can show the
 * correct total and lock the surcharge switch before the card is actually charged (SAL-1314 step 10).
 *
 * @function
 * @name Thoth_WlPay_Form_Surcharge_SurchargeTenderModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
