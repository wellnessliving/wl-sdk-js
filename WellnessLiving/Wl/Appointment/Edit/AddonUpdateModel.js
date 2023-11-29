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
   * @property {number} i_count_paid Quantity of paid add-on in appointment.
   * @property {number} i_inventory_current Quantity of current add-on product inventory.
   * @property {number} i_product Quantity of add-on in appointment.
   * @property {boolean} is_select Whether add-on added to appointment.
   * @property {string} k_shop_product_option Add-on product key.
   * @property {string} url URL to add-on picture. Empty string if add-on doesn't have picture.
   */

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon_data
   * @property {Wl_Appointment_Edit_AddonUpdateModel_a_addon_data_a_addon[]} a_addon Data about appointment add-ons.
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
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Edit_AddonUpdateModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Edit_AddonUpdateModel.prototype.config=function()
{
  return {"a_field": {"a_addon": {"put": {"post": true}},"a_addon_data": {"get": {"result": true}},"is_duration_update": {"put": {"post": true}},"k_appointment": {"get": {"get": true},"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"post": true}}}};
};