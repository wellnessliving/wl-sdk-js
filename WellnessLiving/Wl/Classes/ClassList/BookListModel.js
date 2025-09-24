/**
 * An endpoint to get all the classes for a location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_ClassList_BookListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Classes_ClassList_BookListModel_a_class
   * @property {{}} a_class_tab The list of tab keys for the class.
   * @property {string[]} a_login_type List of login types for current class.
   * @property {string[]} a_member_group List of member groups for current class.
   * @property {string[]} a_url_book The list of URL to book this class.
   * @property {string} dtu_book_date The book date of an event in UTC date/time format. Can be empty string if user cannot book the event.
   * @property {number} i_capacity Class capacity.
   * @property {number} id_bookable Bookable type ID. One of {@link Wl_Service_BookableSid} constants.
   * @property {boolean} is_active This will be `true` if the class is active. Otherwise, this will be `false`.
   * @property {boolean} is_event This will be `true` for events. Otherwise, this will be `false` for classes.
   * @property {boolean} is_online_private `true` means to show class only for clients who can book online,
   * `false` means to show class for all clients.
   * @property {string} k_class The class key.
   * @property {string} k_enrollment_block The enrollment block key.
   * @property {string} m_price_total The total price for an event.
   * @property {string} text_description The class description.
   * @property {string} text_title The class name.
   */

  /**
   * The class list. Every element has the following structure:
   * <dl>
   *   <dt>array <var>a_class_tab</var></dt>
   *   <dd>The list of tab keys for the class.</dd>
   *
   *   <dt>string[] <var>a_login_type</var></dt>
   *   <dd>
   *     List of login types for current class.
   *   </dd>
   *
   *   <dt>string[] <var>a_member_group</var></dt>
   *   <dd>
   *     List of member groups for current class.
   *   </dd>
   *
   *   <dt>string[] <var>a_url_book</var></dt>
   *   <dd>The list of URL to book this class.</dd>
   *
   *   <dt>string <var>dtu_book_date</var></dt>
   *   <dd>The book date of an event in UTC date/time format. Can be empty string if user cannot book the event.</dd>
   *
   *   <dt>int <var>i_capacity</var></dt>
   *   <dd>Class capacity.</dd>
   *
   *   <dt>int <var>id_bookable</var></dt>
   *   <dd>Bookable type ID. One of {@link Wl_Service_BookableSid} constants.</dd>
   *
   *   <dt>bool <var>is_active</var></dt>
   *   <dd>This will be `true` if the class is active. Otherwise, this will be `false`.</dd>
   *
   *   <dt>bool <var>is_event</var></dt>
   *   <dd>This will be `true` for events. Otherwise, this will be `false` for classes.</dd>
   *
   *   <dt>bool <var>is_online_private</var></dt>
   *   <dd>
   *     `true` means to show class only for clients who can book online,
   *     `false` means to show class for all clients.
   *   </dd>
   *
   *   <dt>string <var>k_class</var></dt>
   *   <dd>The class key.</dd>
   *
   *   <dt>string <var>k_enrollment_block</var></dt>
   *   <dd>The enrollment block key.</dd>
   *
   *   <dt>string <var>m_price_total</var></dt>
   *   <dd>The total price for an event.</dd>
   *
   *   <dt>string <var>text_description</var></dt>
   *   <dd>The class description.</dd>
   *
   *   <dt>string <var>text_title</var></dt>
   *   <dd>The class name.</dd>
   * </dl>
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
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_ClassList_BookListModel);

/**
 * @inheritDoc
 */
Wl_Classes_ClassList_BookListModel.prototype.config=function()
{
  return {"a_field": {"a_class": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"k_location": {"get": {"get": true}}}};
};