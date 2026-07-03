/**
 * Gets a list of timezones with currently selected user's timezone and the business policy adjustment whether
 *  clients are allowed to adjust timezone.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Timezone_ProfileTimezoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Profile_Timezone_ProfileTimezoneModel_a_timezone
   * @property {number} i_order Order.
   * @property {number} i_shift Shift time zone.
   * @property {string} k_geo_timezone Timezone key.
   * @property {string} k_timezone Timezone key.
   * @property {string} s_file File name.
   * @property {string} s_title Timezone title.
   * @property {string} text_abbr Timezone abbreviation.
   */

  /**
   * List of timezones. Keys - timezone keys; 
   * Values - sub array with next keys:
   *
   * @get result
   * @type {Wl_Profile_Timezone_ProfileTimezoneModel_a_timezone[]}
   */
  this.a_timezone = undefined;

  /**
   * If a timezone deprecation validation is needed.
   *
   * `true` if required, `false` - otherwise.
   *
   * @put post
   * @type {boolean}
   */
  this.is_deprecate_restrict = false;

  /**
   * Whether clients are allowed to adjust timezone.
   *
   * `true` if allowed, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_profile_timezone = undefined;

  /**
   * Key of the business, in which user selected timezone.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the timezone, which user selected to see site in.
   *
   * @put post
   * @type {string}
   */
  this.k_timezone = "";

  /**
   * Key of the timezone which is currently selected.
   *
   * @get result
   * @type {string}
   */
  this.k_timezone_select = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Timezone_ProfileTimezoneModel);

/**
 * @inheritDoc
 */
Wl_Profile_Timezone_ProfileTimezoneModel.prototype.config=function()
{
  return {"a_field":{"a_timezone":{"get":{"result":true}},"is_deprecate_restrict":{"put":{"post":true}},"is_profile_timezone":{"get":{"result":true}},"k_business":{"get":{"get":true},"put":{"get":true}},"k_timezone":{"put":{"post":true}},"k_timezone_select":{"get":{"result":true}}}};
};

/**
 * Gets a list of timezones with currently selected user's timezone and the business policy adjustment whether
 clients are allowed to adjust timezone.
 *
 * Includes the timezone abbreviation, UTC shift, and display order for each entry, and falls back to
 * the business-configured guest timezone when no member is signed in.
 *
 * @function
 * @name Wl_Profile_Timezone_ProfileTimezoneModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates selected timezone for the site visitor in the given business.
 *
 * Validates the requested timezone against the business timezone deprecation policy, then saves it
 * either to the member's profile field or, for a guest, to the guest-scoped timezone selection.
 *
 * @function
 * @name Wl_Profile_Timezone_ProfileTimezoneModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
