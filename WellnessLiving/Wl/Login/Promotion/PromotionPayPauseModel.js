/**
 * Deletes specified promotion payment pause.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_PromotionPayPauseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Promotion_PromotionPayPauseModel_a_pay_pause_list
   * @property {?string} dl_create Date when this hold period was created. `null` for old records.
   * @property {string} dl_end Ending date of the pause (inclusively - this date is paused). This field contains zero date for promotions placed on hold indefinitely.
   * @property {string} dl_start Starting date of the pause (inclusively - this date is paused).
   * @property {?number} i_hold_day Duration of the hold in days. `null` if the hold is ongoing.
   * @property {boolean} is_past Whether the hold is in past.
   * @property {string} k_promotion_pay_pause Key of the hold period.
   * @property {?string} text_note Additional notes.
   * @property {?string} text_user_create Full name of a user that has created hold period. `null` for old records.
   * @property {?string} uid_create Key of a user that has created hold period. `null` for old records.
   */

  /**
   * List of all promotion payment pause periods. Each element has next structure:
   *
   * `null` if {@link Wl_Login_Promotion_PromotionPayPauseModel.is_list} is false.
   *
   * @get result
   * @type {?Wl_Login_Promotion_PromotionPayPauseModel_a_pay_pause_list[]}
   */
  this.a_pay_pause_list = null;

  /**
   * The end date of the current hold, in the local time zone.
   * This can be set to a special value `0000-00-00` to make the period indefinite until further action.
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
   * Whether need to get all pause periods for the login promotion.
   * If `true` then {@link Wl_Login_Promotion_PromotionPayPauseModel.a_pay_pause_list} will be returned.
   * If `false` then information about specified {@link Wl_Login_Promotion_PromotionPayPauseModel.k_promotion_pay_pause} or
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
   * `false` if not initialized.
   *
   * @get result
   * @post post
   * @put post
   * @type {boolean}
   */
  this.is_mail = false;

  /**
   * Whether or not to send push notification.
   *
   * `false` if not initialized.
   *
   * @get result
   * @post post
   * @put post
   * @type {boolean}
   */
  this.is_push = false;

  /**
   * Whether or not to send SMS notification.
   *
   * `false` if not initialized.
   *
   * @get result
   * @post post
   * @put post
   * @type {boolean}
   */
  this.is_sms = false;

  /**
   * Key of business to which currently handled pause period or login promotion belongs.
   *
   * `null` if not initialized.
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
   * @get result
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
  return {"a_field":{"a_pay_pause_list":{"get":{"result":true}},"dt_end":{"get":{"get":true,"result":true},"post":{"get":true},"put":{"get":true}},"dt_start":{"get":{"get":true,"result":true},"post":{"get":true},"put":{"get":true}},"dtu_date_notification":{"get":{"result":true}},"is_list":{"get":{"get":true}},"is_mail":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"is_push":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"is_sms":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_login_promotion":{"delete":{"get":true},"get":{"get":true,"result":true},"post":{"get":true}},"k_mail_pattern":{"get":{"result":true}},"k_promotion_pay_pause":{"delete":{"get":true},"get":{"get":true,"result":true},"post":{"get":true,"result":true},"put":{"get":true,"result":true}},"text_note":{"get":{"result":true},"post":{"post":true},"put":{"post":true}}}};
};

/**
 * Deletes specified promotion payment pause.
 *
 * Validates access and then permanently removes the hold period identified by `k_promotion_pay_pause`,
 * also cancelling any associated expiry reminder notification task.
 *
 * @function
 * @name Wl_Login_Promotion_PromotionPayPauseModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns promotion payment pause data: all hold periods when {@link Wl_Login_Promotion_PromotionPayPauseModel.is_list} is `true`,
 the specified hold period when {@link Wl_Login_Promotion_PromotionPayPauseModel.k_promotion_pay_pause} is provided, or the currently
 active hold period otherwise.
 *
 * Also returns notification settings (email, push, SMS flags and email pattern key) and the date the last
 * notification was sent for the hold period, if a hold notification template is configured for the business.
 *
 * @function
 * @name Wl_Login_Promotion_PromotionPayPauseModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds or updates a payment pause period for promotion.
 *
 * Creates a new hold period for the purchased promotion if no `k_promotion_pay_pause` is provided, or updates
 * an existing one. Optionally schedules or sends a hold notification via email, push, or SMS based on the
 * provided flags and the business notification template.
 *
 * @function
 * @name Wl_Login_Promotion_PromotionPayPauseModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates a promotion payment pause period.
 *
 * Requires an existing `k_promotion_pay_pause` key and delegates to `post()` to apply
 * the updated start date, end date, note, and notification settings. Returns an error if no existing hold key is
 * provided.
 *
 * @function
 * @name Wl_Login_Promotion_PromotionPayPauseModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
