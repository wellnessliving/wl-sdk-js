/**
 * Returns information about whether the given user can cancel the booking and the expected consequences.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Cancel_CancelCanModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit";

  /**
   * @typedef {{}} Wl_Book_Cancel_CancelCanModel_a_penalty
   * @property {boolean} is_flat `true` in a case of flat penalty type; `false` in a case of percentage penalty type.
   * @property {string} k_currency Currency key.
   * @property {string} m_amount Penalty amount.
   */

  /**
   * Penalty data.
   *
   *
   * `null` if penalty must be not applied.
   *
   * @get result
   * @type {?Wl_Book_Cancel_CancelCanModel_a_penalty}
   */
  this.a_penalty = null;

  /**
   * `true` if the booking can be canceled online by the specified user, `false` otherwise.
   *
   * Cancellation is possible only if the current visit status is {@link Wl_Visit_VisitSid} or {@link Wl_Visit_VisitSid}.
   *
   * @get result
   * @type {boolean}
   */
  this.can_cancel = undefined;

  /**
   * `true` if the client's account will be flagged instead of charging a monetary fee, `false` otherwise.
   *
   * Meaningful only when {@link Wl_Book_Cancel_CancelCanModel} is `true`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_flag = undefined;

  /**
   * `true` if the cancellation would be considered a late cancel, `false` otherwise.
   *
   * Late cancel applies only to bookings with status {@link Wl_Visit_VisitSid}.
   * Wait-list bookings ({@link Wl_Visit_VisitSid}) are never subject to late cancellation rules.
   *
   * @get result
   * @type {boolean}
   */
  this.is_late = undefined;

  /**
   * `true` if the visit credit (from the purchase option used to book) will be returned
   * to the user's profile after cancellation, `false` otherwise.
   *
   * For regular (non-late) cancellations, the credit is always returned when the booking
   * was made with a purchase option.
   *
   * For late cancellations, return depends on the business's Payment Return Policy.
   *
   * @get result
   * @type {boolean}
   */
  this.is_refund = undefined;

  /**
   * Key of the business within which the action is performed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit key.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Cancel_CancelCanModel);

/**
 * @inheritDoc
 */
Wl_Book_Cancel_CancelCanModel.prototype.config=function()
{
  return {"a_field":{"a_penalty":{"get":{"result":true}},"can_cancel":{"get":{"result":true}},"is_flag":{"get":{"result":true}},"is_late":{"get":{"result":true}},"is_refund":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_visit":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Book_Cancel_CancelCanModel.instanceGet
 * @param {string} k_business Key of the business within which the action is performed.
 * @param {string} k_visit Visit key.
 * @returns {Wl_Book_Cancel_CancelCanModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about whether the given user can cancel the booking and the expected consequences.
 *
 * Accepts a business key and a visit key, validates access, and performs a dry-run cancellation to determine
 * whether the visit can be cancelled online, whether a late-cancel penalty applies, and whether the purchase
 * option credit would be refunded.
 *
 * @function
 * @name Wl_Book_Cancel_CancelCanModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
