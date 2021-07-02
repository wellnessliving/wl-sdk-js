/**
 * Retrieves information about staff members for the current location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_Staff_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location";

  /**
   * @typedef {{}} Wl_Location_Staff_ListModel_a_staff
   * @property {string} k_staff ID as staff member. Primary key in {@link \RsStaffSql} table.
   * @property {string} s_name Name.
   * @property {string} s_position Job title.
   * @property {string} s_surname 1st letter of surname.
   * @property {string} uid ID as user. Primary key in {@link \PassportLoginSql} table.
   */

  /**
   * A list of staff members with information about them. Every element has keys:
   * <dl>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     ID as staff member. Primary key in {@link \RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     Name.
   *   </dd>
   *   <dt>
   *     string <var>s_position</var>
   *   </dt>
   *   <dd>
   *     Job title.
   *   </dd>
   *   <dt>
   *     string <var>s_surname</var>
   *   </dt>
   *   <dd>
   *     1st letter of surname.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     ID as user. Primary key in {@link \PassportLoginSql} table.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_Staff_ListModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * ID of a location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_Staff_ListModel);

/**
 * @inheritDoc
 */
Wl_Location_Staff_ListModel.prototype.config=function()
{
  return {"a_field": {"a_staff": {"get": {"result": true}},"k_location": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Location_Staff_ListModel.instanceGet
 * @param {string} k_location ID of a location.
 * @returns {Wl_Location_Staff_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */