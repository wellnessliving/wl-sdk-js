/**
 * An endpoint that manages or retrieves information about holds on Purchase Options.
 *
 * The DELETE method can remove a hold.
 * The GET method only returns information about active holds.
 * The POST method can create or edit a hold.
 * The PUT method can edit a hold.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_PromotionPayPauseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Promotion_PromotionPayPauseModel_a_pay_pause_list
   * @property {?string} dl_create Date when this hold period was created. <tt>null</tt> for old records.
   * @property {string} dl_end Ending date of the pause (inclusively - this date is paused).
   * This field contains zero date for promotions placed on hold indefinitely.
   * @property {string} dl_start Starting date of the pause (inclusively - this date is paused).
   * @property {?number} i_hold_day Duration of the hold in days. <tt>null</tt> if the hold is ongoing.
   * @property {boolean} is_past Whether the hold is in past.
   * @property {string} k_promotion_pay_pause Key of the hold period.
   * @property {?string} text_note Additional notes.
   * @property {?string} text_user_create Full name of a user that has created hold period. <tt>null</tt> for old records.
   * @property {?string} uid_create Key of a user that has created hold period. <tt>null</tt> for old records.
   */

  /**
   * List of all promotion payment pause periods. Each element has next structure:<dl>
   *   <dt>string|null <var>dl_create</var></dt>
   *   <dd>Date when this hold period was created. <tt>null</tt> for old records.</dd>
   *   <dt>string <var>dl_end</var></dt>
   *   <dd>
   *     Ending date of the pause (inclusively - this date is paused).
   *     This field contains zero date for promotions placed on hold indefinitely.
   *   </dd>
   *   <dt>string <var>dl_start</var></dt>
   *   <dd>Starting date of the pause (inclusively - this date is paused).</dd>
   *   <dt>int|null <var>i_hold_day</var></dt>
   *   <dd>Duration of the hold in days. <tt>null</tt> if the hold is ongoing.</dd>
   *   <dt>bool <var>is_past</var></dt>
   *   <dd>Whether the hold is in past.</dd>
   *   <dt>string <var>k_promotion_pay_pause</var></dt>
   *   <dd>Key of the hold period.</dd>
   *   <dt>string|null <var>text_note</var></dt>
   *   <dd>Additional notes.</dd>
   *   <dt>string|null <var>text_user_create</var></dt>
   *   <dd>Full name of a user that has created hold period. <tt>null</tt> for old records.</dd>
   *   <dt>string|null <var>uid_create</var></dt>
   *   <dd>Key of a user that has created hold period. <tt>null</tt> for old records.</dd>
   * </dl>
   *
   * <tt>null</tt> if {@link Wl_Login_Promotion_PromotionPayPauseModel.is_list} is false.
   *
   * @get result
   * @type {?Wl_Login_Promotion_PromotionPayPauseModel_a_pay_pause_list[]}
   */
  this.a_pay_pause_list = null;

  /**
   * The end date of the current hold, in the local time zone. This can be set to a special value
   * {@link Wl\Promotion\Pay\PromotionPayPause::DATE_END_INDEFINITE} to make the period indefinite until further action.
   *
   * `null` if it shouldn't be updated.
   *
   * @get get,result
   * @post get
   * @put get
   * @type {?string}
   */
  this.dt_end = null;

  /**
   * The start date of the current hold, in the local time zone.
   *
   * `null` if it shouldn't be updated.
   *
   * @get get,result
   * @post get
   * @put get
   * @type {?string}
   */
  this.dt_start = null;

  /**
   * The date when the email notification was sent.
   *
   * `null` if it shouldn't be updated.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_date_notification = null;

  /**
   * Whether or not to send email notification.
   *
   * <tt>false</tt> if not initialized.
   *
   * @get result
   * @post post
   * @put put
   * @type {boolean}
   */
  this.is_mail = false;

  /**
   * Whether need to get all pause periods for the login promotion.
   * If <tt>true</tt> then {@link Wl_Login_Promotion_PromotionPayPauseModel.a_pay_pause_list} will be returned.
   * If <tt>false</tt> then information about specified {@link Wl_Login_Promotion_PromotionPayPauseModel.k_promotion_pay_pause} or
   * currently active pause period will be returned ({@link Wl_Login_Promotion_PromotionPayPauseModel.dt_start},
   * {@link Wl_Login_Promotion_PromotionPayPauseModel.dt_end} and {@link Wl_Login_Promotion_PromotionPayPauseModel.text_note}).
   *
   * @get get
   * @type {boolean}
   */
  this.is_list = false;

  /**
   * Whether or not to send email notification.
   *
   * <tt>false</tt> if not initialized.
   *
   * @get result
   * @post post
   * @put put
   * @type {boolean}
   */
  this.is_push = false;

  /**
   * Whether or not to send email notification.
   *
   * <tt>false</tt> if not initialized.
   *
   * @get result
   * @post post
   * @put put
   * @type {boolean}
   */
  this.is_sms = false;

  /**
   * Key of business to which currently handled pause period or login promotion belongs.
   *
   * <tt>null</tt> if not initialized.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * The Purchase Option key. If this key is used, a new hold will be created. The endpoint will return a `start-cross`
   * status code if a hold is already in place.
   *
   * Ignored if {@link Wl_Login_Promotion_PromotionPayPauseModel.k_promotion_pay_pause} is provided.
   *
   * `null` if not yet initialized.
   *
   * @delete get
   * @get get,result
   * @post get
   * @type {?string}
   */
  this.k_login_promotion = null;

  /**
   * Key of the email pattern.
   *
   * @type {?string}
   */
  this.k_mail_pattern = null;

  /**
   * The promotion payment hold key. If this key is used, it will edit an existing hold.
   * This key will be empty if there's no active hold in place or if a scheduled hold isn't in effect.
   *
   * `null` if not yet initialized or if the request is based on {@link Wl_Login_Promotion_PromotionPayPauseModel.k_login_promotion}.
   *
   * @delete get
   * @get get,result
   * @post get,result
   * @put get,result
   * @type {?string}
   */
  this.k_promotion_pay_pause = null;

  /**
   * Additional notes for the promotion payment pause period.
   * Leave this field as `null` if the note shouldn't be updated.
   *
   * `null` if it shouldn't be updated.
   *
   * @get result
   * @post post
   * @put post
   * @type {?string}
   */
  this.text_note = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_PromotionPayPauseModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_PromotionPayPauseModel.prototype.config=function()
{
  return {"a_field": {"a_pay_pause_list": {"get": {"result": true}},"dt_end": {"get": {"get": true,"result": true},"post": {"get": true},"put": {"get": true}},"dt_start": {"get": {"get": true,"result": true},"post": {"get": true},"put": {"get": true}},"dtu_date_notification":{"get":{"result":true}},"is_mail": {"get": {"result": true},"post": {"post": true},"put": {"put": true}},"is_list": {"get": {"get": true}},"is_push": {"get": {"result": true},"post": {"post": true},"put": {"put": true}},"is_sms": {"get": {"result": true},"post": {"post": true},"put": {"put": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_login_promotion": {"delete": {"get": true},"get": {"get": true,"result": true},"post": {"get": true}},"k_mail_pattern":{"get": {"result": true}},"k_promotion_pay_pause": {"delete": {"get": true},"get": {"get": true,"result": true},"post": {"get": true,"result": true},"put": {"get": true,"result": true}},"text_note": {"get": {"result": true},"post": {"post": true},"put": {"post": true}}}};
};