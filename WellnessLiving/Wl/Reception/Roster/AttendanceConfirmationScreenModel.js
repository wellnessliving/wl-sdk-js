/**
 * Api endpoint to get information about a client that has just checked in.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Reception\Roster\AttendanceConfirmationScreenApi
 */
function Wl_Reception_Roster_AttendanceConfirmationScreenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ACTIVE_OVERLAY = true;

  /**
   * @typedef {{}} Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_photo
   * @property {number} i_height Image height.
   * @property {number} i_width Image height.
   * @property {string} url_photo Image URL.
   */

  /**
   * Data about a login logo.
   * <dl>
   *   <dt>int <var>i_height</var></dt>
   *   <dd>Image height.</dd>
   *   <dt>int <var>i_width</var></dt>
   *   <dd>Image height.</dd>
   *   <dt>string <var>url_photo</var></dt>
   *   <dd>Image URL.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_photo}
   */
  this.a_photo = [];

  /**
   * @typedef {{}} Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit_a_payment_a_image_a_restrict
   * @property {number} i_limit Count of possible visits.
   * @property {number} i_remain Count of remaining visits.
   * @property {boolean} s_date Name of the calendar period.
   */
  /**
   * @typedef {{}} Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit_a_payment_a_image
   * @property {number} i_height Height of the image in pixels.
   * @property {number} i_width Width of the image in pixels.
   * @property {boolean} is_empty `true` means that image is empty.
   * @property {string} url-thumbnail Link on the image.
   */
  /**
   * @typedef {{}} Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit_a_payment
   * @property {Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit_a_payment_a_image} a_image Logo of the promotion.<dl>
   *    <dt>int <tt>i_height</tt></dt><dd>Height of the image in pixels.</dd>
   *    <dt>int <tt>i_width</tt></dt><dd>Width of the image in pixels.</dd>
   *    <dt>bool <tt>is_empty</tt></dt><dd>`true` means that image is empty.</dd>
   *    <dt>string <tt>url-thumbnail</tt></dt><dd>Link on the image.</dd>
   *    </dl>
   * @property {Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit_a_payment_a_image_a_restrict} a_restrict Information about calendar restrictions.<dl>
   *    <dt>int <tt>i_limit</tt></dt><dd>Count of possible visits.</dd>
   *    <dt>int <tt>i_remain</tt></dt><dd>Count of remaining visits.</dd>
   *    <dt>bool <tt>s_date</tt></dt><dd>Name of the calendar period.</dd>
   *  </dl>
   * @property {string} html_expire Message about expiration date of the promotion.
   * @property {number} i_book Count of future books that are paid with this promotion.
   * @property {number} i_limit Limit on the visit count of the promotion.
   * @property {number} i_remain Remaining count of visits.
   * @property {number} i_use Count of usage of the promotion.
   * @property {number} i_visit_past Count of attended sessions before last renew.
   * `0` if there are no sessions before last renew or promotion is not auto-renew.
   * @property {boolean} is_last_use If `true`, the promotion has a usage limit and no remaining visits. Otherwise, this will be `false`.
   * @property {string} s_expire Message about expiration date of the promotion.
   * @property {string} s_start Start date if promotion has not started yet.
   * @property {string} s_title Name of the promotion.
   * @property {string} uid Promotion owner.
   */
  /**
   * @typedef {{}} Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit
   * @property {Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit_a_payment} a_payment Data for informational card about promotion. Important for the card fields are:<dl>
   *    <dt>array <tt>a_image</tt></dt><dd>Logo of the promotion.<dl>
   *    <dt>int <tt>i_height</tt></dt><dd>Height of the image in pixels.</dd>
   *    <dt>int <tt>i_width</tt></dt><dd>Width of the image in pixels.</dd>
   *    <dt>bool <tt>is_empty</tt></dt><dd>`true` means that image is empty.</dd>
   *    <dt>string <tt>url-thumbnail</tt></dt><dd>Link on the image.</dd>
   *    </dl></dd>
   *    <dt>array <tt>a_restrict</tt></dt>
   *  <dd>Information about calendar restrictions.<dl>
   *    <dt>int <tt>i_limit</tt></dt><dd>Count of possible visits.</dd>
   *    <dt>int <tt>i_remain</tt></dt><dd>Count of remaining visits.</dd>
   *    <dt>bool <tt>s_date</tt></dt><dd>Name of the calendar period.</dd>
   *  </dl></dd>
   *    <dt>string <tt>html_expire</tt></dt><dd>Message about expiration date of the promotion.</dd>
   *    <dt>int <tt>i_book</tt></dt><dd>Count of future books that are paid with this promotion.</dd>
   *    <dt>int <tt>i_limit</tt></dt><dd>Limit on the visit count of the promotion.</dd>
   *    <dt>int <tt>i_remain</tt></dt><dd>Remaining count of visits.</dd>
   *    <dt>int <tt>i_use</tt></dt><dd>Count of usage of the promotion.</dd>
   *    <dt>int <tt>i_visit_past</tt></dt><dd>Count of attended sessions before last renew.
   * `0` if there are no sessions before last renew or promotion is not auto-renew.</dd>
   *    <dt>bool <tt>is_last_use</tt></dt>
   *    <dd>If `true`, the promotion has a usage limit and no remaining visits. Otherwise, this will be `false`.</dd>
   *    <dt>string <tt>s_expire</tt></dt><dd>Message about expiration date of the promotion.</dd>
   *    <dt>string <tt>s_start</tt></dt><dd>Start date if promotion has not started yet.</dd>
   *    <dt>string <tt>s_title</tt></dt><dd>Name of the promotion.</dd>
   *    <dt>string <tt>uid</tt></dt><dd>Promotion owner.</dd>
   *  </dl>
   * @property {string} text_expire Date when promotion ends in user-friendly format.
   * @property {string} text_payment The title of the promotion.
   */

  /**
   * Data of the visit.
   * <dl>
   *    <dt>array <var>a_payment</var></dt>
   *    <dd>Data for informational card about promotion. Important for the card fields are:<dl>
   *    <dt>array <var>a_image</var></dt><dd>Logo of the promotion.<dl>
   *        <dt>int <var>i_height</var></dt><dd>Height of the image in pixels.</dd>
   *        <dt>int <var>i_width</var></dt><dd>Width of the image in pixels.</dd>
   *        <dt>bool <var>is_empty</var></dt><dd>`true` means that image is empty.</dd>
   *        <dt>string <var>url-thumbnail</var></dt><dd>Link on the image.</dd>
   *    </dl></dd>
   *    <dt>array <var>a_restrict</var></dt>
   *      <dd>Information about calendar restrictions.<dl>
   *        <dt>int <var>i_limit</var></dt><dd>Count of possible visits.</dd>
   *        <dt>int <var>i_remain</var></dt><dd>Count of remaining visits.</dd>
   *        <dt>bool <var>s_date</var></dt><dd>Name of the calendar period.</dd>
   *      </dl></dd>
   *    <dt>string <var>html_expire</var></dt><dd>Message about expiration date of the promotion.</dd>
   *    <dt>int <var>i_book</var></dt><dd>Count of future books that are paid with this promotion.</dd>
   *    <dt>int <var>i_limit</var></dt><dd>Limit on the visit count of the promotion.</dd>
   *    <dt>int <var>i_remain</var></dt><dd>Remaining count of visits.</dd>
   *    <dt>int <var>i_use</var></dt><dd>Count of usage of the promotion.</dd>
   *    <dt>int <var>i_visit_past</var></dt><dd>Count of attended sessions before last renew.
   *     `0` if there are no sessions before last renew or promotion is not auto-renew.</dd>
   *    <dt>bool <var>is_last_use</var></dt>
   *    <dd>If `true`, the promotion has a usage limit and no remaining visits. Otherwise, this will be `false`.</dd>
   *    <dt>string <var>s_expire</var></dt><dd>Message about expiration date of the promotion.</dd>
   *    <dt>string <var>s_start</var></dt><dd>Start date if promotion has not started yet.</dd>
   *    <dt>string <var>s_title</var></dt><dd>Name of the promotion.</dd>
   *    <dt>string <var>uid</var></dt><dd>Promotion owner.</dd>
   *  </dl></dd>
   *    <dt>string <var>text_expire</var></dt><dd>Date when promotion ends in user-friendly format.</dd>
   *    <dt>string <var>text_payment</var></dt><dd>The title of the promotion.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Reception_Roster_AttendanceConfirmationScreenModel_a_visit}
   */
  this.a_visit = [];

  /**
   * Date and time of the visit.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class schedule ID.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Secret string.
   *
   * @get get
   * @type {string}
   */
  this.s_secret = "";

  /**
   * Status of the operation.
   *
   * @get result
   * @type {string}
   */
  this.s_status = "";

  /**
   * The class title.
   *
   * @get result
   * @type {string}
   */
  this.text_class = "";

  /**
   * User's member ID. Copy of {@link \RsLoginMemberSql}.`s_member`.
   *
   * @get result
   * @type {string}
   */
  this.text_member = "";

  /**
   * The staff member's full name.
   *
   * @get result
   * @type {string}
   */
  this.text_staff_name = "";

  /**
   * Class session time in user-friendly format.
   *
   * @get result
   * @type {string}
   */
  this.text_time = "";

  /**
   * Full name of the user.
   *
   * @get result
   * @type {string}
   */
  this.text_user = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_AttendanceConfirmationScreenModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_AttendanceConfirmationScreenModel.prototype.config=function()
{
  return {"a_field": {"a_photo": {"get": {"result": true}},"a_visit": {"get": {"result": true}},"dtu_date": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"s_secret": {"get": {"get": true}},"s_status": {"get": {"result": true}},"text_class": {"get": {"result": true}},"text_member": {"get": {"result": true}},"text_staff_name": {"get": {"result": true}},"text_time": {"get": {"result": true}},"text_user": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};