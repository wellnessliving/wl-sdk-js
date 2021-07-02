/**
 * Point to get all classes of location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_ClassList_BookListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Classes_ClassList_BookListModel_a_class
   * @property {{}} a_class_tab The list of tab keys for class.
   * @property {boolean} is_active <tt>true</tt> if class is active; <tt>false</tt> otherwise.
   * @property {boolean} is_event <tt>true</tt> for events; <tt>false</tt> for classes.
   * @property {string} k_class Class key. Primary key in {@link \RsClassSql} table.
   * @property {string} k_enrollment_block Enrollment block key. Primary key in {@link \RsEnrollmentBlockSql} table.
   * @property {string} text_description Description of the class.
   * @property {string} text_title Name of the class.
   */

  /**
   * Class list. Every element has next structure:
   * <dl>
   *   <dt>
   *     array <var>a_class_tab</var>
   *   </dt>
   *   <dd>
   *     The list of tab keys for class.
   *   </dd>
   *   <dt>
   *     bool <var>is_active</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if class is active; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_event</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> for events; <tt>false</tt> for classes.
   *   </dd>
   *   <dt>
   *     string <var>k_class</var>
   *   </dt>
   *   <dd>
   *     Class key. Primary key in {@link \RsClassSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_enrollment_block</var>
   *   </dt>
   *   <dd>
   *     Enrollment block key. Primary key in {@link \RsEnrollmentBlockSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_description</var>
   *   </dt>
   *   <dd>
   *     Description of the class.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Name of the class.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Classes_ClassList_BookListModel_a_class[]}
   */
  this.a_class = undefined;

  /**
   * Location primary key in {@link \RsLocationSql} table.
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
  return {"a_field": {"a_class": {"get": {"result": true}},"k_location": {"get": {"get": true}}}};
};