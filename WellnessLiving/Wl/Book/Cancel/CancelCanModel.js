/**
 * Returns information about whether the given user can cancel an online booking and what
 * consequences the cancellation would have.
 *
 * This model performs a dry run only — no actual cancellation is performed.
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
    this._s_key = "k_business,k_visit,uid";

    /**
     * @typedef {{}} Wl_Book_Cancel_CancelCanModel_a_penalty
     * @property {boolean} is_flat `true` in a case of flat penalty type; `false` in a case of percentage penalty type.
     * @property {string} k_currency Currency key.
     * @property {string} m_amount Penalty amount.
     */

    /**
     * Penalty data.
     * <dl>
     *     <dt>bool `is_flat`</dt>
     *     <dd>`true` in a case of flat penalty type; `false` in a case of percentage penalty type.</dd>
     *     <dt>string `k_currency`</dt>
     *     <dd>Currency key.</dd>
     *     <dt>string `m_amount`</dt>
     *     <dd>Penalty amount.</dd>
     * </dl>
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
     * Cancellation is possible only if the current visit status is `BOOK` or `WAIT`.
     *
     * @get result
     * @type {boolean}
     */
    this.can_cancel = false;

    /**
     * `true` if the client's account will be flagged instead of charging a monetary fee, `false` otherwise.
     *
     * Meaningful only when {@link Wl_Book_Cancel_CancelCanModel.is_late} is `true`.
     *
     * @get result
     * @type {boolean}
     */
    this.is_flag = false;

    /**
     * `true` if the cancellation would be considered a late cancel, `false` otherwise.
     *
     * Late cancel applies only to bookings with status `BOOK`.
     * Wait-list bookings (`WAIT`) are never subject to late cancellation rules.
     *
     * @get result
     * @type {boolean}
     */
    this.is_late = false;

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
    this.is_refund = false;

    /**
     * Key of the business within which the action is performed.
     *
     * @get get
     * @type {string}
     */
    this.k_business = "0";

    /**
     * Visit key.
     *
     * @get get
     * @type {string}
     */
    this.k_visit = "0";

    /**
     * The user key on whose behalf the cancellation would be performed.
     *
     * @get get
     * @type {string}
     */
    this.uid = "0";

    this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Book_Cancel_CancelModel);

/**
 * @inheritDoc
 */
Wl_Book_Cancel_CancelCanModel.prototype.config=function()
{
    return {"a_field": {"a_penalty": {"get": {"result": true}},"can_cancel": {"get": {"result": true}},"is_flag": {"get": {"result": true}},"is_late": {"get": {"result": true}},"is_refund": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_visit": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};