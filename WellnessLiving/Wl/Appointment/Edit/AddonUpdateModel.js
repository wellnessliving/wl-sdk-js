/**
 * Return data about appointment's add-ons.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Edit_AddonUpdateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon
   * @property {number} i_product The add-on count. Max value is 255.
   * @property {number} i_use The add-on use count. Max value is 255. Not set means same value as add-on count.
   * @property {string} k_shop_product_option The add-on key.
   */

  /**
   * The appointment addon-ons.
   *
   * Old format - an array where each value is key of the add-on.
   * New format - each element is an array:
   *
   * @put post
   * @type {Wl_Appointment_Edit_AddonUpdateModel_a_addon}
   */
  this.a_addon = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon
   * @property {string} html_amount Formatted HTML price of the addon.
   * @property {string} html_duration HTML-escaped duration text.
   * @property {string} html_title HTML-escaped addon title.
   * @property {number} i_count_banked Pre-purchased units the client has; at least 0.
   * @property {number} i_count_paid Paid units in the current appointment.
   * @property {number} i_count_unpaid Unpaid units in the current appointment.
   * @property {number} i_count_use Used units in the current appointment.
   * @property {number} i_product Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`.
   * @property {boolean} is_disable `true` when the addon has no products or is not active.
   */

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon_buy
   * @property {string} html_amount Formatted HTML price of the addon.
   * @property {string} html_duration HTML-escaped duration text.
   * @property {string} html_title HTML-escaped addon title.
   * @property {number} i_count_banked Pre-purchased units the client has; at least 0.
   * @property {number} i_count_paid Paid units in the current appointment.
   * @property {number} i_count_unpaid Unpaid units in the current appointment.
   * @property {number} i_count_use Used units in the current appointment.
   * @property {number} i_product Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`.
   * @property {boolean} is_disable `true` when the addon has no products or is not active.
   */

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon_own
   * @property {string} html_amount Formatted HTML price of the addon.
   * @property {string} html_duration HTML-escaped duration text.
   * @property {string} html_title HTML-escaped addon title.
   * @property {number} i_count_banked Pre-purchased units the client has; at least 0.
   * @property {number} i_count_paid Paid units in the current appointment.
   * @property {number} i_count_unpaid Unpaid units in the current appointment.
   * @property {number} i_count_use Used units in the current appointment.
   * @property {number} i_product Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`.
   * @property {boolean} is_disable `true` when the addon has no products or is not active.
   */

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon_select
   * @property {string} html_amount Formatted HTML price of the addon.
   * @property {string} html_duration HTML-escaped duration text.
   * @property {string} html_title HTML-escaped addon title.
   * @property {number} i_count_banked Pre-purchased units the client has; at least 0.
   * @property {number} i_count_paid Paid units in the current appointment.
   * @property {number} i_count_unpaid Unpaid units in the current appointment.
   * @property {number} i_count_use Used units in the current appointment.
   * @property {number} i_product Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`.
   * @property {boolean} is_disable `true` when the addon has no products or is not active.
   */

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon} a_addon Data about appointment add-ons.
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon_buy} a_addon_buy Add-ons available for purchase: zero quantity, zero usage quantity, and zero banked quantity.
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon_own} a_addon_own Add-ons already owned but not selected: zero quantity, zero usage quantity, non-zero banked quantity.
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon_select} a_addon_select Add-ons selected for this appointment: non-zero quantity or non-zero usage quantity.
   * @property {boolean} is_addon_banking Whether at least one of appointment add-ons is bankable.
   * @property {boolean} is_all_addon_selected Whether all appointment add-ons have non-zero quantity or non-zero usage quantity.
   * @property {boolean} is_search Determines whether the add-on search field needs to be shown.
   */

  /**
   * Data to show appointment add-ons:
   *
   * @get result
   * @type {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data}
   */
  this.a_addon_data = undefined;

  /**
   * List of user keys to get add-ons for. Not empty only when getting add-ons for new appointment
   * (`k_appointment` is null). User key '-1' means walk-in, user key '0' means new user
   * (user will be created together with appointment).
   *
   * @get get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * Determines whether the appointment duration needs to be updated.
   *
   * @put post
   * @type {boolean}
   */
  this.is_duration_update = false;

  /**
   * The appointment key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * The business key. This will be an empty string if not set yet.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key.
   * Not empty only when getting add-ons for new appointment (`k_appointment` is null).
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Service key.
   * Not empty only when getting add-ons for new appointment (`k_appointment` is null).
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Edit_AddonUpdateModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Edit_AddonUpdateModel.prototype.config=function()
{
  return {"a_field":{"a_addon":{"put":{"post":true}},"a_addon_data":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"is_duration_update":{"put":{"post":true}},"k_appointment":{"get":{"get":true},"put":{"get":true}},"k_business":{"get":{"get":true},"put":{"get":true}},"k_location":{"get":{"get":true}},"k_service":{"get":{"get":true}}}};
};

/**
 * Return data about appointment's add-ons.
 *
 * Returns the current list of add-ons attached to the specified appointment along with the full
 * catalog of available add-ons for the service. The caller must have view access to the appointment.
 *
 * @function
 * @name Wl_Appointment_Edit_AddonUpdateModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Replaces the add-ons for the appointment with the provided list, optionally updating the appointment duration.
 *
 * Removes all existing add-ons from the appointment and attaches the provided set in their place.
 * When add-ons with a duration are included, the appointment end time is recalculated accordingly.
 * The operation runs inside a database transaction to ensure consistency.
 *
 * @function
 * @name Wl_Appointment_Edit_AddonUpdateModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
