/**
 * Gets a list of classes which take place in the specified location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_ClassList_BookListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Classes_ClassList_BookListModel_a_class
   * @property {string[]} a_class_tab The list of class tab keys for the class.
   * @property {string[]} a_login_type List of login types for current class.
   * @property {string[]} a_member_group List of member groups for current class.
   * @property {string[]} a_url_book The list of URL to book this class.
   * @property {string} dtu_book_date The book date of an event in UTC date/time format. Can be empty string if user cannot book the event.
   * @property {number} i_capacity Class capacity.
   * @property {number} id_bookable Bookable type ID. One of {@link Wl_Service_BookableSid} constants.
   * @property {boolean} is_active This will be `true` if the class is active. Otherwise, this will be `false`.
   * @property {boolean} is_event This will be `true` for events. Otherwise, this will be `false` for classes.
   * @property {boolean} is_online_private `true` means to show class only for clients who can book online, `false` means to show class for all clients.
   * @property {string} k_class The class key.
   * @property {string} k_enrollment_block The enrollment block key.
   * @property {string} m_price_total The total price for an event.
   * @property {string} text_description The class description.
   * @property {string} text_title The class name.
   */

  /**
   * The class list. Every element has the following structure:
   *
   * @get result
   * @type {Wl_Classes_ClassList_BookListModel_a_class[]}
   */
  this.a_class = undefined;

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
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_ClassList_BookListModel);

/**
 * @inheritDoc
 */
Wl_Classes_ClassList_BookListModel.prototype.config=function()
{
  return {"a_field":{"a_class":{"get":{"result":true}},"i_image_height":{"get":{"get":true}},"i_image_width":{"get":{"get":true}},"k_location":{"get":{"get":true}}}};
};

/**
 * Gets a list of classes which take place in the specified location.
 *
 * Used to build the booking page for a location, displaying all classes that clients can sign up for.
 * Returns the full class details needed for display: schedules, assigned staff, booking links, pricing,
 * and category tabs.
 *
 * @function
 * @name Wl_Classes_ClassList_BookListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
