/**
 * Returns class information including schedules, images, and booking settings for the specified business.
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
   * @typedef {{}} Wl_Classes_ClassView_ElementModel_a_class_list_a_schedule_a_repeat
   * @property {number} i_repeat A count of the periods specified in `id_repeat`.
   * @property {number} id_repeat A class for managing time intervals. Last ID: 9.
   */

  /**
   * @typedef {{}} Wl_Classes_ClassView_ElementModel_a_class_list_a_schedule
   * @property {Wl_Classes_ClassView_ElementModel_a_class_list_a_schedule_a_repeat} a_repeat Schedule repeat options:
   * @property {string[]} a_staff_key A list of staff member keys that provide sessions for this schedule.
   * @property {string[]} a_uid_staff_key A list of staff member keys UID that provide sessions for this schedule.
   * @property {string} dl_end The end date of the schedule in the location's time zone. This will be empty or zero if the schedule is ongoing.
   * @property {string} dl_start The start date of the schedule in location's time zone.
   * @property {number} i_day The day of the week, where the class schedule exists, starting with 1 for Monday and ending with 7 for Sunday.
   * @property {number} i_duration The duration of the schedule sessions in minutes.
   * @property {boolean} is_cancel Defines whether the schedule canceled or not.
   * @property {string} k_location The location key of the schedule.
   * @property {string} m_price The price of a single session of the schedule.
   * @property {string} text_room The room of the class period.
   * @property {string} text_time The time of the session in the following format: `[start_time] - [end_time]` in the locale's time zone.
   */

  /**
   * @typedef {{}} Wl_Classes_ClassView_ElementModel_a_class_list_a_config
   * @property {string[]} a_family_relation List of allowed relation types specific to a given business.  Key is ID. One of {@link RsFamilyRelationSid} constant.  Value is SID.
   * @property {number[]} a_family_relation_login_allow List of allowed relation types specific to a given business.  Each value constant from {@link RsFamilyRelationSid} class.
   */

  /**
   * @typedef {{}} Wl_Classes_ClassView_ElementModel_a_class_list_a_search_tag
   * @property {string} k_search_tag Search tag key.
   * @property {string} text_title Name of the tag.
   */

  /**
   * @typedef {{}} Wl_Classes_ClassView_ElementModel_a_class_list_a_visits_required
   * @property {number} i_count Number of visits.
   * @property {boolean} is_event `true` if this is an event, `false` if this is a class.
   * @property {string} k_class Key of the class or event.
   * @property {string} text_title Name of the class or event.
   */

  /**
   * @typedef {{}} Wl_Classes_ClassView_ElementModel_a_class_list
   * @property {?Wl_Classes_ClassView_ElementModel_a_class_list_a_config} a_config Class-specific business policies overriding the business defaults. Has the same structure as {@link Wl_Business_Config_BusinessConfigModel}. `null` when the class uses the default business policy without overrides.
   * @property {Wl_Classes_ClassView_ElementModel_a_class_list_a_schedule} a_schedule A list of class schedules. Each element has the next structure:
   * @property {Wl_Classes_ClassView_ElementModel_a_class_list_a_search_tag} a_search_tag Tags for quick search.
   * @property {Wl_Classes_ClassView_ElementModel_a_class_list_a_visits_required} a_visits_required Information about visits that should be reviewed prior to visiting this class/event.
   * @property {?boolean} has_own_image This field will be `true` if the image used for the class is an image uploaded in the class setup. If an image isn't uploaded in the class setup, but there's at least one image in Setup->Locations image slider, this field will be `false`. This field will be `null` if the class image isn't uploaded, and there are no images in location slider. In such cases, an empty image is used.
   * @property {string} html_description The browser-safe description.
   * @property {string} html_special_instruction Special instructions safe to be inserted to a browser.
   * @property {number} i_age_from The minimum age restriction.
   * @property {number} i_age_to The maximum age restriction.
   * @property {boolean} is_age_public Determines whether age restriction exist and should be taken into account prior to booking this class/event.
   * @property {boolean} is_bookable Determines whether clients can book the class or event online.
   * @property {boolean} is_event Determines whether the item is an event or class instance. If `true`, the item is an event instance. Otherwise, this will be `false`.
   * @property {boolean} is_online_private `true` - show classes only for clients who can book online. `false` - show classes for all clients.
   * @property {boolean} is_promotion_client Determines whether clients of the business can see a list of applicable Purchase Options.
   * @property {boolean} is_promotion_only Determines whether the item can be booked only using promotions.
   * @property {boolean} is_promotion_staff Determines whether staff members of the business can see a list of applicable Purchase Options.
   * @property {boolean} is_single_buy Determines whether the item can be paid with Drop In or not. If it can be paid with Drop In, then `m_price` shows the price for one visit. If this is `0`, it means the class is free.
   * @property {boolean} is_virtual Determines whether the item is virtual.
   * @property {string} k_class The class key.
   * @property {string} k_promotion_default Promotion key of the default promotion to use when paying for the class. `null` if no promotion is selected.
   * @property {string} m_price Drop In price, if the class allows payment for one visit.
   * @property {boolean} show_special_instructions This will be `true` if special instructions can be public. Otherwise, this will be `false` if they should only be shown to the clients who booked the class.
   * @property {string} url_image The URL link to the item image.
   * @property {string} xml_description The item description.
   * @property {string} xml_special_instruction The item's special instructions.
   */

  /**
   * Displays information about the class schedule(s). Each element has the next structure:
   *
   * @get result
   * @type {Wl_Classes_ClassView_ElementModel_a_class_list[]}
   */
  this.a_class_list = undefined;

  /**
   * The image height in pixels. Specify this value if you need the image to be returned in a specific size.
   * If this value isn't specified, the returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * The image width in pixels. Specify this value if you need the image to be returned in a specific size.
   * If this value isn't specified, the returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class key used to get information for a specific class.
   *
   * An empty value returns information for all classes of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_class = "";

  /**
   * Defines if canceled schedules should be included in the result.
   *
   * If `true`, canceled schedules will be shown. Otherwise, this will be `false`.
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
  return {"a_field":{"a_class_list":{"get":{"result":true}},"i_image_height":{"get":{"get":true}},"i_image_width":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"get":true}},"show_cancelled":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Classes_ClassView_ElementModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Classes_ClassView_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns class information including schedules, images, and booking settings for the specified business.
 *
 * Used by import tools to read the full class catalog for a business. Returns a map of all classes
 * (or a single class) with the information needed to replicate class data in an external system:
 * schedules, images, booking constraints, and descriptions.
 *
 * @function
 * @name Wl_Classes_ClassView_ElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
