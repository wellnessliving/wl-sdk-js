/**
 * Gets full list of ranks owned by the client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Rank_AddonModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Profile_Rank_AddonModel_a_addon
   * @property {string[]} a_addon Colors for character and skill sections.
   * @property {string} dt_add Date, when rank has been added.
   * @property {number} i_days_left The number of days that have passed since the start date of the set time period for class attendance.
   * @property {number} i_duration The number of days/months/years that were set for attending the classes.
   * @property {string} k_rank Rank key.
   * @property {string} k_rank_category Category rank key.
   * @property {string} s_date Date, when rank has been added.
   * @property {string} s_duration Tha name of the duration (day/month/year).
   * @property {string} s_rank Rank name.
   * @property {string} s_rank_category Rank category name.
   * @property {string} uid User's key.
   * @property {string} z_addon Compressed and serialised list of addons, that client has.
   */

  /**
   * Full list of ranks owned by the client.
   * The key of the array is a category rank key.
   *
   * @get result
   * @type {Wl_Profile_Rank_AddonModel_a_addon[]}
   */
  this.a_addon = undefined;

  /**
   * @typedef {{}} Wl_Profile_Rank_AddonModel_a_addon_list_a_addon
   * @property {string} s_title The title for the color code.
   * @property {string} s_value HEX color code.
   */

  /**
   * @typedef {{}} Wl_Profile_Rank_AddonModel_a_addon_list
   * @property {Wl_Profile_Rank_AddonModel_a_addon_list_a_addon} a_addon Array of addons:
   * @property {string} s_title The title for the row (Character | Skill).
   */

  /**
   * HEX color codes for Character and Skill fields.
   *
   * @get result
   * @type {Wl_Profile_Rank_AddonModel_a_addon_list[]}
   */
  this.a_addon_list = undefined;

  /**
   * List of new addons for rank where each item is a selected HEX color code.
   *
   * @post post
   * @type {string[]}
   */
  this.a_addon_new = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Rank Category key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_rank_category = "";

  /**
   * User's key in which profile should be shown addons.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Rank_AddonModel);

/**
 * @inheritDoc
 */
Wl_Profile_Rank_AddonModel.prototype.config=function()
{
  return {"a_field":{"a_addon":{"get":{"result":true}},"a_addon_list":{"get":{"result":true}},"a_addon_new":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_rank_category":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Gets full list of ranks owned by the client.
 *
 * Validates that the user belongs to the given business and rank category, loads the list of addon colors
 * available for the rank category, and loads the ranks currently owned by the client, enriching each rank
 * with the calculated number of days left and duration text for ranks with a limited duration.
 *
 * @function
 * @name Wl_Profile_Rank_AddonModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Sets addon ranks in Belt.
 *
 * Validates that the current user has permission to manage ranks for the client, resolves the addon colors
 * available for the business rank type, checks that every submitted addon color is one of the available
 * colors, and saves the new addon selection for the client's rank category.
 *
 * @function
 * @name Wl_Profile_Rank_AddonModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
