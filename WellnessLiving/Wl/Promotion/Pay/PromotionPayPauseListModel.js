/**
 * Manages promotion payment pause periods for list of login promotion.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Pay_PromotionPayPauseListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of login promotion keys to create or delete pause for.
   * Primary key in {@link \RsLoginPromotionSql} table.
   *
   * <tt>null</tt> if not initialized.
   *
   * @post post
   * @put post
   * @type {?string[]}
   */
  this.a_login_promotion = null;

  /**
   * List of the login promotions which can not be put on hold in the selected period.
   *
   * @put result
   * @type {{}}
   */
  this.a_login_promotion_exclude = undefined;

  /**
   * List of the clients to which list of login promotion belong and have promotion payment pause on the selected period.
   *
   * @put result
   * @type {{}}
   */
  this.a_user = undefined;

  /**
   * End date of pause period in login promotion timezone. Can be set to special value
   * {@link PromotionPayPause::DATE_END_INDEFINITE} to make the period indefinite until further action.
   *
   * <tt>null</tt> if not initialized.
   *
   * @post post
   * @put post
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Start date of pause period in login promotion timezone.
   *
   * <tt>null</tt> if not initialized.
   *
   * @post post
   * @put post
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * Number of all clients to which list of login promotion belong and have promotion payment pause on the selected period.
   *
   * @put result
   * @type {number}
   */
  this.i_user = undefined;

  /**
   * Action to perform with promotion payment pause periods.
   * One for the {@link \Wl\Promotion\Pay\PromotionPayPauseActionSid} constants.
   *
   * <tt>null</tt> if not initialized.
   *
   * @post post
   * @type {?number}
   */
  this.id_action = null;

  /**
   * Additional notes for promotion payment pause period.
   *
   * <tt>null</tt> if not initialized.
   *
   * @post post
   * @type {?string}
   */
  this.text_note = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Pay_PromotionPayPauseListModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Pay_PromotionPayPauseListModel.prototype.config=function()
{
  return {"a_field": {"a_login_promotion": {"post": {"post": true},"put": {"post": true}},"a_login_promotion_exclude": {"put": {"result": true}},"a_user": {"put": {"result": true}},"dl_end": {"post": {"post": true},"put": {"post": true}},"dl_start": {"post": {"post": true},"put": {"post": true}},"i_user": {"put": {"result": true}},"id_action": {"post": {"post": true}},"text_note": {"post": {"post": true}}}};
};