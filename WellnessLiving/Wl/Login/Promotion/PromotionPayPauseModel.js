/**
 * Manages promotion payment pause periods.
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
   * @property {string} k_promotion_pay_pause Key of the hold period. Primary key in the {@link \RsPromotionPayPauseSql} table.
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
   *   <dd>Key of the hold period. Primary key in the {@link \RsPromotionPayPauseSql} table.</dd>
   *   <dt>string|null <var>text_note</var></dt>
   *   <dd>Additional notes.</dd>
   *   <dt>string|null <var>text_user_create</var></dt>
   *   <dd>Full name of a user that has created hold period. <tt>null</tt> for old records.</dd>
   *   <dt>string|null <var>uid_create</var></dt>
   *   <dd>Key of a user that has created hold period. <tt>null</tt> for old records.</dd>
   * </dl>
   *
   * <tt>null</tt> if {@link PromotionPayPauseApi::$is_list} is false.
   *
   * @get result
   * @type {?Wl_Login_Promotion_PromotionPayPauseModel_a_pay_pause_list[]}
   */
  this.a_pay_pause_list = null;

  /**
   * End date of pause period in login promotion timezone. Can be set to special value
   * {@link PromotionPayPause::DATE_END_INDEFINITE} to make the period indefinite until further action.
   *
   * <tt>null</tt> if it shouldn't be updated.
   *
   * @get get,result
   * @post get
   * @put get
   * @type {?string}
   */
  this.dt_end = null;

  /**
   * Start date of pause period in login promotion timezone.
   *
   * <tt>null</tt> if it shouldn't be updated.
   *
   * @get get,result
   * @post get
   * @put get
   * @type {?string}
   */
  this.dt_start = null;

  /**
   * Whether need to get all pause periods for the login promotion.
   * If <tt>true</tt> then {@link PromotionPayPauseApi::$a_pay_pause_list} will be returned.
   * If <tt>false</tt> then information about specified {@link PromotionPayPauseApi::$k_promotion_pay_pause} or
   * currently active pause period will be returned ({@link PromotionPayPauseApi::$dt_start},
   * {@link PromotionPayPauseApi::$dt_end} and {@link PromotionPayPauseApi::$text_note}).
   *
   * @get get
   * @type {boolean}
   */
  this.is_list = false;

  /**
   * Key of business to which currently handled pause period or login promotion belongs.
   * Primary key in {@link \RsBusinessSql} table.
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
   * Key of login promotion to create pause for.
   * Primary key in {@link \RsLoginPromotionSql} table.
   *
   * Ignored if {@link $k_promotion_pay_pause} is provided.
   *
   * <tt>null</tt> if not initialized.
   *
   * @delete get
   * @get get,result
   * @post get
   * @type {?string}
   */
  this.k_login_promotion = null;

  /**
   * Key of the payment pause period to read or update.
   * Primary key in {@link \RsPromotionPayPauseSql} table.
   *
   * <tt>null</tt> if not initialized or request is based on {@link $k_login_promotion}.
   *
   * @delete get
   * @get get,result
   * @post get,result
   * @put get,result
   * @type {?string}
   */
  this.k_promotion_pay_pause = null;

  /**
   * Additional notes for promotion payment pause period.
   *
   * <tt>null</tt> if it shouldn't be updated.
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
  return {"a_field": {"a_pay_pause_list": {"get": {"result": true}},"dt_end": {"get": {"get": true,"result": true},"post": {"get": true},"put": {"get": true}},"dt_start": {"get": {"get": true,"result": true},"post": {"get": true},"put": {"get": true}},"is_list": {"get": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_login_promotion": {"delete": {"get": true},"get": {"get": true,"result": true},"post": {"get": true}},"k_promotion_pay_pause": {"delete": {"get": true},"get": {"get": true,"result": true},"post": {"get": true,"result": true},"put": {"get": true,"result": true}},"text_note": {"get": {"result": true},"post": {"post": true},"put": {"post": true}}}};
};