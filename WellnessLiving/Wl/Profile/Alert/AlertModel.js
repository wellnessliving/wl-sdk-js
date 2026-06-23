/**
 * Retrieves a list of notices to show in user's profile.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Alert_AlertModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Alert_AlertModel_a_alert
   * @property {?string} dt_date The date and time in MySQL format in local time when the alert was last modified. This will be `null` if the date isn't available for this alert.
   * @property {number} id_profile_note Sources of system notes.
   * @property {boolean} is_today This will be `true` if the alert was added today. Otherwise, this will be `false`.
   * @property {string} k_pay_account The key of the client's account.
   * @property {string} k_purchase_item The key of the purchase item.
   * @property {string} s_text The alert's text.
   */

  /**
   * A list of alerts. Every element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Profile_Alert_AlertModel_a_alert[]}
   */
  this.a_alert = undefined;

  /**
   * @typedef {{}} Wl_Profile_Alert_AlertModel_a_warning
   * @property {string[]} a_location_flag The list of location keys where this note is flagged.
   * @property {boolean} dt_create The date and time in MySQL format in local time when the warning was created.
   * @property {boolean} dt_date The date and time in MySQL format in local time when the warning was last modified.
   * @property {boolean} is_book_restricted `true` means that client is restricted to make bookings, `false` - otherwise.
   * @property {boolean} is_flag This will be `true` if the client is flagged. Otherwise, this will be `false`.
   * @property {boolean} is_purchase_restricted `true` means that client is restricted to make purchases. Otherwise, this will be `false`.
   * @property {boolean} is_today This will be `true` if the warning was added today. Otherwise, this will be `false`.
   * @property {string} s_text The text of the warning.
   * @property {string} text_author Staff name, who created a note.
   * @property {string} text_editor Staff name, who edited a note last time.
   */

  /**
   * A list of warnings. Every element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Profile_Alert_AlertModel_a_warning[]}
   */
  this.a_warning = undefined;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Alert_AlertModel);

/**
 * @inheritDoc
 */
Wl_Profile_Alert_AlertModel.prototype.config=function()
{
  return {"a_field":{"a_alert":{"get":{"result":true}},"a_warning":{"get":{"result":true}},"is_backend":{"get":{"get":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Alert_AlertModel.instanceGet
 * @param {string} uid The key of the user to show information for.
 * @param {string} k_business The key of the business.
 * @returns {Wl_Profile_Alert_AlertModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of notices to show in user's profile.
 *
 * Returns `a_alert` (system alerts including unconfirmed contracts) and `a_warning` (login notes
 * and flags with author and editor information) for the specified user in the given business.
 *
 * @function
 * @name Wl_Profile_Alert_AlertModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
