/**
 * An endpoint that updates add-ons for an appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Edit_AddonUpdateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon
   * @property {number} i_product Add-on count. Max value is 255.
   * @property {number} i_use Add-on use count. Max value is 255. Not set means same value as add-on count..
   * @property {string} k_shop_product_option Key of add-on.
   */

  /**
   * The appointment add-ons.
   *
   * <b>Old format -</b> an array where each value is the add-on key.
   *
   * <b>New format -</b> each element is an object: {@link Wl_Appointment_Edit_AddonUpdateModel_a_addon}.
   *
   * @put post
   * @type {string[]|Wl_Appointment_Edit_AddonUpdateModel_a_addon[]}
   */
  this.a_addon = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon
   * @property {string} html_amount Add-on additional amount. Empty string if add-on doesn't have additional amount.
   * @property {string} html_duration Add-on additional duration. Empty string if add-on doesn't add duration.
   * @property {string} html_title Add-on name.
   * @property {number} i_count_banked The quantity purchased and not used for the add-on.
   * @property {number} i_count_paid Quantity of paid add-on in appointment.
   * @property {number} i_count_use The quantity used in current appointment for the add-on.
   * @property {number} i_inventory_current Quantity of current add-on product inventory.
   * @property {number} i_product Quantity of add-on in appointment.
   * @property {boolean} is_select Whether add-on added to appointment.
   * @property {boolean} is_track Whether product usage tracking for client.
   * @property {string} k_shop_product_option Add-on product key.
   * @property {string} url URL to add-on picture. Empty string if add-on doesn't have picture.
   */

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon[]} a_addon Data about appointment add-ons.
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon[]} a_addon_buy Data about appointment add-ons
   * that have zero quantity, zero usage quantity and zero banked quantity.
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon[]} a_addon_own Data about appointment add-ons
   * that have zero quantity, zero usage quantity and non-zero banked quantity.
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon[]} a_addon_select Data about appointment add-ons
   * that have non-zero quantity or non-zero usage quantity.
   * @property {boolean} is_addon_banking Whether at least one of appointment add-ons is bankable.
   * @property {boolean} is_all_addon_selected Whether all appointment add-ons have non-zero quantity or non-zero usage quantity.
   * @property {boolean} is_search Whether add-on search field need to be shown.
   */

  /**
   * Data to show appointment add-ons.
   *
   * @get result
   * @type {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data}
   */
  this.a_addon_data = undefined;

  /**
   * List of user keys to get add-ons for. Not empty only when getting add-ons for new appointment
   * ({@link Wl_Appointment_Edit_AddonUpdateModel.k_appointment} is undefined). User key '-1' means walk-in,
   * user key '0' means new user (user will be created together with appointment).
   *
   * @get get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * Whether we need to update appointment duration.
   *
   * @put post
   * @type {boolean}
   */
  this.is_duration_update = false;

  /**
   * The appointment key.
   *
   * @get get
   * @put post
   * @type {string}
   */
  this.k_appointment = undefined;

  /**
   * The business key.
   *
   * @get get
   * @put post
   * @type {string}
   */
  this.k_business = '';

  /**
   * Location key.
   * Not empty only when getting add-ons for new appointment ({@link Wl_Appointment_Edit_AddonUpdateModel.k_appointment} is undefined).
   *
   * @get get
   * @var {string}
   */
  this.k_location = '';

  /**
   * Service key.
   * Not empty only when getting add-ons for new appointment ({@link Wl_Appointment_Edit_AddonUpdateModel.k_appointment} is undefined).
   *
   * @get get
   * @var {string}
   */
  this.k_service = '';

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Edit_AddonUpdateModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Edit_AddonUpdateModel.prototype.config=function()
{
  return {"a_field": {"a_addon": {"put": {"post": true}},"a_addon_data": {"get": {"result": true}},"a_uid": {"get": {"get": true}},"is_duration_update": {"put": {"post": true}},"k_appointment": {"get": {"get": true},"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"post": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}}}};
};