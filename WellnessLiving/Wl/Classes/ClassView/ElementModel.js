/**
 * Returns specific class schedule information.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_ClassView_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Classes_ClassView_ElementModel_a_class_list
   * @property {{}} a_class_tab The list of tab keys for item.
   * @property {{}} a_config Class specific business policies. <tt>null</tt> in case when using business policy.
   * @property {{}} a_schedule List of class/event schedules. Each element is array representation of {@link WL_Classes_ClassView_ElementScheduleEntity}.
   * @property {{}} a_search_tag Tags for quick search.
   * @property {{}} a_visits_required Information about visits that should be visited prior to visit this class/event.
   * @property {string} html_description Description safe to be inserted to browser.
   * @property {string} html_special_instruction Special instructions safe to be inserted to browser.
   * @property {number} i_age_from Minimum age restriction.
   * @property {number} i_age_to Maximum age restriction.
   * @property {boolean} is_age_public Whether age restriction exist and should be taken into account prior to booking of this class/event.
   * @property {boolean} is_bookable Whether clients can book class or event online or not.
   * @property {boolean} is_promotion_client Whether clients of the business can see list of applicable purchase options.
   * @property {boolean} is_promotion_only Whether the item can be booked only using promotions.
   * @property {boolean} is_promotion_staff Whether staff members of the business can see list of applicable purchase options.
   * @property {boolean} is_single_buy Whether the item can be paid with Drop In or not.
   * If it can be paid with Drop In, then `m_price` shows price for one visit.
   * If can be `0`, this means that class is free.
   * @property {boolean} is_virtual Whether the item is virtual.
   * @property {boolean} is_event Whether the item is event or class instance. `true` if item is event instance, `false` otherwise.
   * @property {boolean} is_online_private `true` means to show class only for clients who can book online,
   * `false` means to show class for all clients.
   * @property {string} k_class Item key.
   * @property {string} m_price Drop In price, if class allows to pay for one visit.
   * @property {boolean} show_special_instructions `true` if special instructions can be public, `false` if they should be shown only to the clients, who booked the class.
   * @property {string} text_title Item title.
   * @property {string} xml_description Item description.
   * @property {string} xml_special_instruction Item special instructions.
   * @property {string} url_image Url link to item image.
   */

  /**
   * Class schedule information. Each element has next structure:
   * <dl>
   *   <dt>array <var>a_class_tab</var></dt>
   *   <dd>The list of tab keys for item.</dd>
   *   <dt>array <var>a_config</var></dt>
   *   <dd>Class specific business policies. <tt>null</tt> in case when using business policy.</dd>
   *   <dt>array <var>a_schedule</var></dt>
   *   <dd>List of class/event schedules. Each element is array representation of {@link WL_Classes_ClassView_ElementScheduleEntity}.</dd>
   *   <dt>array <var>a_search_tag</var></dt>
   *   <dd>Tags for quick search.</dd>
   *   <dt>array <var>a_visits_required</var></dt>
   *   <dd>Information about visits that should be visited prior to visit this class/event.</dd>
   *   <dt>string <var>html_description</var></dt>
   *   <dd>Description safe to be inserted to browser.</dd>
   *   <dt>string <var>html_special_instruction</var></dt>
   *   <dd>Special instructions safe to be inserted to browser.</dd>
   *   <dt>int <var>i_age_from</var></dt>
   *   <dd>Minimum age restriction.</dd>
   *   <dt>int <var>i_age_to</var></dt>
   *   <dd>Maximum age restriction.</dd>
   *   <dt>bool <var>is_age_public</var></dt>
   *   <dd>Whether age restriction exist and should be taken into account prior to booking of this class/event.</dd>
   *   <dt>bool <var>is_bookable</var></dt>
   *   <dd>Whether clients can book class or event online or not.</dd>
   *   <dt>bool <var>is_promotion_client</var></dt>
   *   <dd>Whether clients of the business can see list of applicable purchase options.</dd>
   *   <dt>bool <var>is_promotion_only</var></dt>
   *   <dd>Whether the item can be booked only using promotions.</dd>
   *   <dt>bool <var>is_promotion_staff</var></dt>
   *   <dd>Whether staff members of the business can see list of applicable purchase options.</dd>
   *   <dt>bool <var>is_single_buy</var></dt>
   *   <dd>
   *     Whether the item can be paid with Drop In or not.
   *     If it can be paid with Drop In, then `m_price` shows price for one visit.
   *     If can be `0`, this means that class is free.
   *   </dd>
   *   <dt>bool <var>is_virtual</var></dt>
   *   <dd>Whether the item is virtual.</dd>
   *   <dt>bool <var>is_event</var></dt>
   *   <dd>Whether the item is event or class instance. `true` if item is event instance, `false` otherwise.</dd>
   *   <dt>bool <var>is_online_private</var></dt>
   *   <dd>
   *     `true` means to show class only for clients who can book online,
   *     `false` means to show class for all clients.
   *   </dd>
   *   <dt>string <var>k_class</var></dt>
   *   <dd>Item key.</dd>
   *   <dt>string <var>m_price</var></dt>
   *   <dd>Drop In price, if class allows to pay for one visit.</dd>
   *   <dt>bool <var>show_special_instructions</var></dt>
   *   <dd>`true` if special instructions can be public, `false` if they should be shown only to the clients, who booked the class.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Item title.</dd>
   *   <dt>string <var>xml_description</var></dt>
   *   <dd>Item description.</dd>
   *   <dt>string <var>xml_special_instruction</var></dt>
   *   <dd>Item special instructions.</dd>
   *   <dt>string <var>url_image</var></dt>
   *   <dd>Url link to item image.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Classes_ClassView_ElementModel_a_class_list}
   */
  this.a_class_list = [];

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class key to get information of specific class only.
   *
   * Empty value to return information for all classes of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_class = "";

  /**
   * Defines if cancelled schedules should be included in result.
   *
   * `true` to show cancelled schedules, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.show_cancelled = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_ClassView_ElementModel);

/**
 * @inheritDoc
 */
Wl_Classes_ClassView_ElementModel.prototype.config=function()
{
  return {"a_field": {"a_class_list": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class": {"get": {"get": true}},"show_cancelled": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Classes_ClassView_ElementModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Classes_ClassView_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */