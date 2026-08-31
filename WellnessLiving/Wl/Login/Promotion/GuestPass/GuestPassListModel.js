/**
 * Retrieves guest passes for a specific client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_GuestPassListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list_a_image
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {string} url-thumbnail Thumbnail url.
   */

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list_a_period_dl
   * @property {string} dl_end Period end date in MySQL date format.
   * @property {string} dl_start Period start date in MySQL date format.
   */

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list_a_settings
   * @property {number} i_claim_day Count of days for accept guest invite.
   * @property {number} i_limit Times that member can invite the same guest.
   * @property {number} i_limit_duration The time during which a member can invite a guest `i_limit` times.
   * @property {number} id_limit_duration Type of the duration of `i_limit_duration`. One of {@link ADurationSid} constants.
   * @property {boolean} is_checkin Whether guests can only enter the gym when the inviting member is checked in.
   * @property {boolean} is_limit Whether there are limits for a guest promotion.
   */

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list
   * @property {Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list_a_image} a_image Thumbnail image data for the guest promotion.
   * @property {?Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list_a_period_dl} a_period_dl Start and end dates of the current reset period.   `null` if there is no reset period or the reset date is unavailable.
   * @property {Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list_a_settings} a_settings Guest pass settings. Empty array when the guest pass has no settings (class-type passes).
   * @property {boolean} can_invite `true` if the guest pass is invite-type (the member sends invitations to guests).
   * @property {boolean} can_send `true` if the member can currently send a guest pass (eligible and within quota).
   * @property {?string} dl_reset Date on which the pass resets or expires, in MySQL date format. `null` if no expiry date is determined.
   * @property {boolean} has_service `true` if the guest pass is service-type (not invite-type). Inverse of `can_invite`.
   * @property {?number} i_cap_day Maximum guest passes that can be sent per day. `null` if there is no daily cap.
   * @property {?number} i_limit Total number of guest passes initially granted. `null` if the supply is unlimited.
   * @property {?number} i_period Numeric length of the reset period (for example `1` for a one-month period). `null` if the promotion has no reset period.
   * @property {?number} i_remain Number of guest passes remaining in the current period. `null` if the supply is unlimited.
   * @property {?number} i_remain_day Number of guest passes remaining today per the daily cap. `null` if there is no daily cap.
   * @property {number} i_use Number of accepted invitations for this guest pass.
   * @property {number} id_period Unit of the reset period. One of {@link ADurationSid} constants. `null` if the promotion has no reset period.
   * @property {number} id_program_guest Guest pass program ID. One of {@link RsProgramSid} constants.
   * @property {number} id_reset_type_guest Reset type of the host promotion. One of {@link Wl_Promotion_Guest_Pass_GuestPassResetTypeSid} constants.
   * @property {boolean} is_expire_note `true` if the pass is close enough to its reset or expiry date that the UI should display a warning.
   * @property {boolean} is_regional `true` if regional access is enabled for the guest pass, i.e. it may be redeemed at other businesses within the franchise region, not only the business that granted it.
   * @property {boolean} is_reset `true` if the remaining count resets on `dl_reset`; `false` if the pass expires on that date.
   * @property {string} k_business Business key.
   * @property {string} k_login_promotion Login promotion key of the host membership.
   * @property {string} k_promotion Guest promotion key.
   * @property {string} text_location Comma-separated list of location titles where the promotion is valid. Empty when the promotion is business-wide.
   * @property {string} text_owner Full name of the membership owner.
   * @property {string} text_period Human-readable reset period label (e.g. "1 month"). Empty when there is no reset period.
   * @property {string} text_period_date Human-readable date range of the current period (e.g. "Jan 1 - Jan 31"). Empty when there is no reset period or the reset date is unavailable.
   * @property {string} text_promotion_grant Title of the host (granting) promotion.
   * @property {string} text_promotion_guest Title of the guest promotion.
   * @property {string} uid_owner User key of the membership owner.
   */

  /**
   * List of client's guest passes.
   *
   * @get result
   * @type {Wl_Login_Promotion_GuestPass_GuestPassListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Local calendar date for which guest pass availability should be calculated.
   *
   * @get get
   * @type {?string}
   */
  this.dl_date = null;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class key to filter guest passes by.
   *
   * `null` if guest passes should not be filtered by class.
   *
   * @get get
   * @type {?string}
   */
  this.k_class = null;

  /**
   * Location key to filter guest passes by.
   *
   * `null` if guest passes should not be filtered by location.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_GuestPass_GuestPassListModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_GuestPass_GuestPassListModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"get":{"result":true}},"dl_date":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Retrieves guest passes for a specific client.
 *
 * Returns all guest passes assigned to the given user, optionally filtered by class and location.
 *
 * Guest passes are not applicable to events, so an empty list is returned when the specified class is an event.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_GuestPassListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
